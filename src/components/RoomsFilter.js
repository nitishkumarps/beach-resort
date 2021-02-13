import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
/**
 * @author
 * @function RoomsFilter
 **/
//get all unique values
const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    handleDefault,
    type,
    capacity,
    price,
    minPrice,
    maxSize,
    minSize,
    maxPrice,
    breakfast,
    pets,
  } = context;
  const handleDefaultClick = (e) => {
    e.preventDefault();
    handleDefault();
  };
  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["All", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index} className="drpclass">
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.sort((a, b) => (a > b ? 1 : -1));
  people = people.map((item, index) => {
    return (
      <option value={item} key={index} className="drpclass">
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select Room Type type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type*/}
        {/* select Guests type*/}
        <div className="form-group">
          <label htmlFor="type">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
            className="size-input"
          >
            {people}
          </select>
        </div>
        {/* end of select type*/}
        {/*room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end of room price */}
        {/*size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*end of size */}
        {/* extras*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        <div className="form-group">
          <button
            className="btn-reset"
            onClick={(e) => {
              handleDefaultClick(e);
            }}
          >
            Reset to Default
          </button>
        </div>
        {/*end of extras*/}
      </form>
    </section>
  );
};

export default RoomsFilter;
