import React from "react";
import "../../styles/NovedadItem.css";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedades" style={{ margin: "20px" }}>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td
                    colSpan="2"
                    style={{ fontWeight: "bold", fontSize: "1.5em" }}
                  >
                    {title}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ fontStyle: "italic" }}>
                    {subtitle}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <img
                      src={imagen}
                      alt="Imagen"
                      style={{
                        width: "100%",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 1.4)",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div
                      dangerouslySetInnerHTML={{ __html: body }}
                      style={{ textAlign: "justify" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <hr />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovedadItem;
