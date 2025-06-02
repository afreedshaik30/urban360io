const Navbar = ({ category, setCategory }) => {
  let newsType = [
    "Home",
    "Technology",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Entertainment",
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-black text-white fs-3">
            Urban
            <span className="text-purple">360</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5 navah">
            {newsType.map((item, idx) => {
              // Normalize to lowercase for the API
              const lower = item.toLowerCase();
              return (
                <a
                  key={idx}
                  href="#"
                  className={`nav-link ${category === lower ? "active" : ""}`}
                  onClick={() => setCategory(lower)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
