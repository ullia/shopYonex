import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

provider.setCustomParameters({
  prompt: "select_account",
});

export async function login() {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch(error => {
      console.error(error);
    });
}

export async function logout() {
  return signOut(auth)
    .then(() => null)
    .catch(error => {
      console.error(error);
    });
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then(snapshot => {
      // console.log(snapshot);
      if (snapshot.exists()) {
        const admins = snapshot.val();
        // console.log(admins);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addNewProduct(product, imageUrl) {
  // console.log(product);
  // console.log(imageUrl);
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    image: imageUrl,
    category: product.category.split("/"),
    price: parseInt(product.price),
    size: product.size.split(","),
    colors: product.colors.split(","),
  });
}

export async function getProducts() {
  return get(ref(database, "products")).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `/carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `/carts/${userId}/${productId}`));
}
