import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './styler.css';

const DomainGetter = () => {
  const [domain, setDomain] = useState("google.com");
  const [domainData, setDomainData] = useState([]);
  const apiUrl = `http://127.0.0.1:8000/domain/${domain}`;
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e) => {
    setDomain(e.target.value);
  };

  const handleOnClick = () => {
    setIsVisible(!false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(apiUrl)
      .then((response) => {
        // Upon a successful response, set the tasks state
        setDomainData(response.data);
        setDomain("");
      })
      .catch((error) => {
        console.error("Error fetching domain:", error);
      });
  };

  return (
    <div className="container">
      <form
        className="d-flex align-items-center justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <FormControl
            type="text"
            name="domain"
            placeholder="Enter your Domain here"
            aria-label="Enter your Domain here"
            aria-describedby="basic-addon2"
            size="lg"
            value={domain}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="success" onClick={handleOnClick}>
            GO
          </Button>
        </div>
      </form>

      {domainData ? (
        <div className="my-5">
          <div className="row">
            <div className="container-fluid"></div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/abstract-business-infographics-with-circles-map_1284-39415.jpg?w=900&t=st=1698116221~exp=1698116821~hmac=e4195c23e52b1c339f9c7822ec60bfb4eef1b50af1119b51f085fe32615b4c7c"
                />
                <Card.Body>
                  <Card.Title style={{  color: "#A60067" }}>
                    Hosted Country
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#44FFD1" }}>{domainData.country}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/realistic-scoreboard_1012-160.jpg?w=900&t=st=1698117209~exp=1698117809~hmac=6163ab277f5931190c542c632a1c76cfd1260ac0c6ac2ffd95c711a8501b32ec"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Country Code
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.countryCode}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            <div className="col-md-4"><Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/area-management-abstract-concept_335657-3255.jpg?w=900&t=st=1698117606~exp=1698118206~hmac=2a3a0cb5166b47310e6518507b046e121f33826031990081428f2bed5683ec75"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Region
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.region}</span>
                  </Card.Text>
                </Card.Body>
              </Card></div>
          </div>
          <div className="row my-3">
          <div className="col-md-4">
              <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/inside-country-traveling-abstract-concept-illustration_335657-2480.jpg?w=826&t=st=1698120969~exp=1698121569~hmac=437d1a4f78177e32efe8fa4ef56056fc50e529db215c26236a7db7f1b7fbdfe5"
                />
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Region Name
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#44FFD1" }}>{domainData.regionName}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/premium-vector/illustration-travel-new-york-city-landscape-buildings-flat-vector-logo_194708-857.jpg?w=826"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  City
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.city}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            <div className="col-md-4"><Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?w=826&t=st=1698120720~exp=1698121320~hmac=dedf0b8fc6f915da5b46e57586af98840196cdef68b20804266816b1acb0cee8"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Zip Code
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#44FFD1" }}>{domainData.zip}</span>
                  </Card.Text>
                </Card.Body>
              </Card></div>
          </div>
          
          <div className="row">
          <div className="col-md-4">
              <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/modern-question-mark-help-support-page_1017-27395.jpg?w=826&t=st=1698119815~exp=1698120415~hmac=48863e32609311d14284f31d1a944812e481ea5231b2a2abed673cb156a3dfcf"
                />
                <Card.Body>
                  <Card.Title style={{  color: "#A60067" }}>
                  Query IP address
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#44FFD1" }}>{domainData.query}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/around-world-concept-illustration_114360-3029.jpg?w=826&t=st=1698119688~exp=1698120288~hmac=b551b64d0035d9cb2b6409a3f4008e791fdce8a490033b594e6f057e30f73b73"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Logitude & Latitude
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.lon} {domainData.lat}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            <div className="col-md-4"><Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/time-zones-abstract-concept-illustration-time-standard-international-business-coordination-meeting-management-utc-converter-gmt-world-clock-calculator-jet-lag_335657-110.jpg?w=826&t=st=1698120204~exp=1698120804~hmac=0f45d01468ae2dd08cd910400064056b7946b4711424f9438a6b07a7ae49df3a"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Time Zone
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.timezone}</span>
                  </Card.Text>
                </Card.Body>
              </Card></div>
          </div>
          <div className="row mt-3">
          <div className="col-md-4">
              <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/premium-vector/ipv4-ipv6-stock-illustration-ipsec-tls-sign-internet-protocol-address-concept-sticky-dynamic_135661-456.jpg?w=826"
                />
                <Card.Body>
                  <Card.Title style={{  color: "#A60067" }}>
                  ISP
                  </Card.Title>
                  <Card.Text>
                    <span style={{ color: "#44FFD1" }}>{domainData.isp}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
            <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/paint-business-icons_98292-5364.jpg?w=826&t=st=1698121138~exp=1698121738~hmac=63f83c44d1a609c080598a689a7e761f8cc0fbb1c0b4ebcff3a2bf60c510e80c"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  Organization
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.org}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            <div className="col-md-4">
              <Card className={`card-appear ${isVisible ? 'appear' : ''} styleShadow`}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/wireframe-connecting-earth-sphere_1284-52863.jpg?w=826&t=st=1698121213~exp=1698121813~hmac=8abf81688fde3e75c19164a79a8b6a7ac86ce4a6a53e79f9fb988811e88ca441"/>
                <Card.Body>
                  <Card.Title style={{ color: "#A60067" }}>
                  ASN
                  </Card.Title>
                  <Card.Text>
                  <span style={{ color: "#44FFD1" }}>{domainData.as}</span>
                  </Card.Text>
                </Card.Body>
              </Card></div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DomainGetter;