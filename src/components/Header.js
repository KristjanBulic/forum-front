
const Header = () => {

    return (
        <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-white title is-3" href={"/"}>
                    F33ds.xyz
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button" href={"/create"}>
                                <strong>Create Post</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        )
}

export default Header;