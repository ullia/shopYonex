import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";
import { QueryClient, useMutation } from "@tanstack/react-query";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [sucess, setSucess] = useState();
  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),

    onSuccess: async () =>
      await QueryClient.invalidateQueries({
        queryKey: ["products"],

        refetchType: "all",
      }),
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.files);

    if (name === "file") {
      setFile(files && files[0]);
      // console.log(files);
      return;
    }
    setProduct(product => ({ ...product, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then(url => {
        // console.log(url);
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSucess("등록완료!");
              setTimeout(() => {
                setSucess(null);
              }, 4000);
            },
          },
        );
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {sucess && <p className="my-2">{sucess}</p>}
      {file && (
        <img className="w-96 mx-auto mb-2" src={URL.createObjectURL(file)} alt="local file" />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" required onChange={handleChange} />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="size"
          value={product.size ?? ""}
          placeholder="사이즈 옵션들(','로 구분)"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="colors"
          value={product.colors ?? ""}
          placeholder="컬러 옵션들(','로 구분)"
          required
          onChange={handleChange}
        />
        <Button text={isUploading ? "업로드중..." : "제품 등록하기"} disabled={isUploading} />
      </form>
    </section>
  );
}
