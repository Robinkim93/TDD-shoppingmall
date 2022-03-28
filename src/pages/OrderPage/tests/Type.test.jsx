import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("displays product images from server", async () => {
  render(<Type orderType="products"/>);

  // 이미지 찾기
  const productImages = await screen.findAllByRole("img"{
      name: /product$/i
  })
});
