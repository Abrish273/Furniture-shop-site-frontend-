import A from "../../assets/a.jpg";
import "../shop/shop.css";

export default function MediaCard() {
  return (
    <div className="whole">
      <div className="main">
        <div className="left">A place where you can find Quality products</div>
        <div className="right">
          <img src={A} alt="furniture" />
        </div>
      </div>
    </div>
  );
}
