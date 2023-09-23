export default function Column({ images }) {
  return (
    <div className="column">
      {images.map((imageUrl, index) => (
        <figure className="column__item" key={index}>
          <div className="column__item-imgwrap">
            <div
              className="column__item-img"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
          </div>
        </figure>
      ))}
    </div>
  );
}
