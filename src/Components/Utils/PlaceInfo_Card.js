const PlaceInfo_Card = ({
  key,
  PlacesViewCard,
  place_img,
  placesView_Details_Box,
  placesView_placeName,
}) => {
  return (
    <div key={key} className={PlacesViewCard}>
      <div className={place_img}>
        <img src={item.img_url} alt="" />
      </div>
      <div className={placesView_Details_Box}>
        <div className={placesView_placeName}>
          <h3 className="h3">{item.place_name}</h3>
        </div>
        <div className="placeview-rating">
          <div className="Placeview-rating-text">
            <span className="rating-digit">{item.rating} *</span>
            <span> (315 rating)</span>
          </div>
          <div className="placeview-rating-disc">Excellent</div>
        </div>
        <div className="placeview-price">
          <div className="placeview-rupe">₹ {item.price}/hr</div>
          <div className="placeview-btns">
            <Button className="common-btn" btn_name="View Details" />
            <Button
              className="common-btn placesView-BookNow"
              btn_name="Book Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
