import React from "react";
import { useRecoilState } from "recoil";
import { DeleteButton } from "../../../assets/svg/Delete";
import { BoldPlus } from "../../../assets/svg/Plus";
import { ImagesAtom, ImageSrcAtom } from "../../../atoms/AtomContainer";
import {
  ImageBox,
  ImageFrame,
  ImageWrapper,
} from "../../diary/DiaryDetail/style";
import * as S from "../style";

function InputImage() {
  const [imageSrc, setImageSrc] = useRecoilState<File[]>(ImageSrcAtom);
  const [images, setImages] = useRecoilState<string[]>(ImagesAtom);

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        setImages([...images, reader.result.toString()]);
      }
    };
  };

  const deleteImg = (index: number) => {
    const imgArr = images.filter((el, idx) => idx !== index);
    setImages([...imgArr]);
  };

  return (
    <div>
      <S.PutImage
        type={"file"}
        onChange={(e) => {
          setImageSrc([...imageSrc, e.target.files![0]]);
          encodeFileToBase64(e.target.files![0]);
        }}
        id={"ImageUpload"}
      ></S.PutImage>

      <ImageFrame>
        <ImageWrapper>
          {images &&
            images?.map((image, index) => {
              return (
                <div key={index}>
                  <ImageBox style={{ width: 120 }} image={image}>
                    <S.DeleteImage onClick={() => deleteImg(index)}>
                      <DeleteButton />
                    </S.DeleteImage>
                  </ImageBox>
                </div>
              );
            })}
        </ImageWrapper>
      </ImageFrame>

      <S.Description>오늘을 대표할 사진을 넣어보세요!</S.Description>

      <S.PutImageLabel htmlFor="ImageUpload">
        <BoldPlus />
      </S.PutImageLabel>
    </div>
  );
}

export default InputImage;
