import Ratio from "react-bootstrap/Ratio";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Image(props) {
  return (
    <Ratio aspectRatio={props.ratio}>
      <LazyLoadImage src={props.image} alt={props.alt} />
    </Ratio>
  );
}

export default Image;
