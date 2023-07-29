function Footer() {
  return (
    <footer className="w-full bg-slate-100 mt-8">
        <div className="container max-w-5xl mx-auto p-4">
          <div className="grid md:grid-cols-3 gap-4 grid-col-1">
            <div>
              <h1 className="uppercase text-center text-lg font-semibold">STORE</h1>
              <h4 className="text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</h4>
            </div>
            <div>
              <h1 className="uppercase text-center font-semibold">INFO</h1>
              <p className="text-sm p-2">Calle Palma 202, Asuncion Paraguay</p>
              <p className="text-sm p-2">0983 404 009</p>
              <p className="text-sm p-2">info@example.com</p>
            </div>
            <div>
              <h1 className="uppercase text-center font-semibold">Redes</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-10">
          <p className="text-center text-sm">Copyright ©2023 All rights reserved | This template is made with  by Derlis Ruiz Diaz</p>
        </div>
    </footer>
  );
}

export default Footer;
