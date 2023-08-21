import { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../utils";
import { Link } from "@inertiajs/react";

const Pagination = ({ paginationCls, defaultSort,links }) => {
  let sort = defaultSort ? defaultSort : 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(paginationCls, sort, active);
    let list = document.querySelectorAll(paginationCls);
    setstate(getPagination(list.length, sort));
  }, [active]);

  return (
    <Fragment>
     
      {links.map((item,key)=><ul>
       {key === 0 &&  
          <li className={`page-item`}>
              <Link
                className="page-link"
                href={item.url}
              >
                <i className="fas fa-chevron-left" />
              </Link>
          </li>
        }
        {key === links.length - 1 && 
          <li className={`page-item}`}>
            <Link
              className="page-link"
              href={item.url}
            
            >
              <i className="fas fa-chevron-right" />
            </Link>
          </li>
        }

      {key !== 0 &&  key !== links.length - 1 && 
        <li key={key} className={`page-item ${item.active === true ? "active" : ""}`}>
          <Link className="page-link"  href={item.url}>
                    {item.label}
          </Link>
        </li>
      }
      </ul>)}    
    </Fragment>
  );
};
export default Pagination;
