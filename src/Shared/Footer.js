import { Footer } from "flowbite-react";
import React from "react";

const Footers = () => {
  return (
    <div className="container mx-auto mt-20">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                src="https://storage.googleapis.com/bubble-finder/$ZviMRReeh5eRrYykwRx8G4M8eLxpcB3Bs4N9rkriA8Mk1RuPav6DRy"
                alt="Flowbite Logo"
                name=""
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">About Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Facebook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Air Doctor™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
              {/* <Footer.Icon href="#" icon={BsInstagram} /> */}
              {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
              {/* <Footer.Icon href="#" icon={BsGithub} /> */}
              {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
