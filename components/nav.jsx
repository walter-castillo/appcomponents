import Link from "next/link";

export const Nav = () => {
      return (
            <nav>
                  <Link href="/hibrido" >
                        hibrido{'  |  '}
                  </Link>
                  <Link href="/static" >
                        estatico{'  |  '}
                  </Link>
                  <Link href="/" >
                        inicio
                  </Link>
                  <br />
                  <br />
            </nav>
      );
};
