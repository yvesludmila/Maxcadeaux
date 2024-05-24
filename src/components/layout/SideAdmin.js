import Link from 'next/link';

export default function SideAdmin({ children }) {
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 ">
            <div className="profile_card shadow-none rounded-none bg-white mt-1">
              <div className="profile_list ">
                <ul className="nav nav-tabs">
                  <li>
                    <Link href="/admin/boutique">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-shopping-basket"></i>
                        </span>
                        Boutique
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/commande">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-check-circle"></i>
                        </span>
                        Commande
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/admin/mission">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-layer-group"></i>
                        </span>
                        Mission
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/admin/validation">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-check-circle"></i>
                        </span>
                        Validation
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/admin/coupon">
                      <a data-bs-toggle="tab">
                        <span className="icons link">
                          <i className="fa fa-link"></i>
                        </span>
                        Coupons
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/offerwall">
                      <a data-bs-toggle="tab">
                        <span className="icons link">
                          <i className="fa fa-link"></i>
                        </span>
                        Offerwall
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/admin/ticket">
                      <a data-bs-toggle="tab">
                        <span className="icons cart">
                          <i className="fa fa-clipboard-list"></i>
                        </span>
                        Ticket
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/message">
                      <a data-bs-toggle="tab">
                        <span className="icons link">
                          <i className="fas fa-envelope"></i>
                        </span>
                        Message
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/user">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-users"></i>
                        </span>
                        Utilisateur
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/news">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-users"></i>
                        </span>
                        News
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/country">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-map"></i>
                        </span>
                        Pays
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/identity">
                      <a data-bs-toggle="tab">
                        <span className="icons gift">
                          <i className="fa fa-check"></i>
                        </span>
                        Vérification
                        <span>
                          <i className="la la-angle-right"></i>
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="tab-content pt-[40px]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
