import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();
  
  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator__section__title">椅子材料</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">皮质</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">织物</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">椅子颜色</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">坐垫颜色</div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">椅腿</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item__label">现代</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item__label">经典</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
