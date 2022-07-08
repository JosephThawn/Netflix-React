import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import matrix from "./matrix.jpeg"

export default function Featured({ type }) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === 'movie' ? "Mvoies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="adventure">Comedy</option>
                    <option value="adventure">Crime</option>
                    <option value="adventure">Fantasy</option>
                    <option value="adventure">Historical</option>
                    <option value="adventure">Roamance</option>
                    <option value="adventure">Drama</option>
                    <option value="adventure">Animation</option>
                    <option value="adventure">Documentary</option>

                </select>

            </div>
        )

        }
      
      <img
        src={matrix}
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
