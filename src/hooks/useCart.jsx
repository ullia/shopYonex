import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["carts", uid || ""],
    queryFn: () => getCart(uid),
    enabled: !!uid,
    refetchInterval: 1000,
  });

  const addOrUpdateToItem = useMutation({
    mutationFn: product => addOrUpdateToCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts", uid] });
    },
  });

  const removeItem = useMutation({
    mutationFn: id => removeFromCart(uid, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts", uid] });
    },
  });

  return {
    cartQuery,
    addOrUpdateToItem,
    removeItem,
  };
}
