import {styled} from '@stitches';
import Image from 'next/image';

export const ImageContainer = styled('div', {
  width: '100%',
  position: 'relative',
  marginY: '$10',
});

export const PostImage = () => {
  return (
    <ImageContainer>
      <Image
        src="/photo1.png"
        alt="cheesecake"
        width={900}
        height={470}
        quality={100}
        layout="intrinsic"
        priority
      />
    </ImageContainer>
  );
};
