import { Container, Row, Col, Nav, Navbar, NavDropdown, Form, Button, Card } from 'react-bootstrap'
import { CurrentWeather } from '../../Services/CurrentWeather'
import CityInput from '../../Services/CityInput';
import '../DashBoard/DashBoard.css'
import { useState } from 'react';
import { useEffect } from 'react';



export default function DashBoard() {
    const [userInput, setUserInput] = useState('');
    const [cityName, setcityName] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');

    const [cityName1, setcityName1] = useState('');
    const [mainTemp1, setMainTemp1] = useState('');
    const [weatherDescription1, setWeatherDescription1] = useState('');

    const [cityName2, setcityName2] = useState('');
    const [mainTemp2, setMainTemp2] = useState('');
    const [weatherDescription2, setWeatherDescription2] = useState('');

    const [cityName3, setcityName3] = useState('');
    const [mainTemp3, setMainTemp3] = useState('');
    const [weatherDescription3, setWeatherDescription3] = useState('');
  

    const [cityName4, setcityName4] = useState('');
    const [mainTemp4, setMainTemp4] = useState('');
    const [weatherDescription4, setWeatherDescription4] = useState('');

    const handleOnClick = async (e) => {
        const data = await CityInput(userInput)
        let city = data.city.name;
        let temp = data.list[0].main.temp;
        let wdescription = data.list[0].weather[0].description

        setcityName(city);
        setMainTemp(temp);
        setWeatherDescription(wdescription);
        setUserInput(''); 

        let city1 = data.city.name;
        let temp1 = data.list[8].main.temp;
        let wdescription1 = data.list[8].weather[0].description

        setcityName1(city1); 
        setMainTemp1(temp1);
        setWeatherDescription1(wdescription1);

        let city2 = data.city.name;
        let temp2 = data.list[16].main.temp;
        let wdescription2 = data.list[16].weather[0].description

        setcityName2(city2);
        setMainTemp2(temp2);
        setWeatherDescription2(wdescription2);

        let city3 = data.city.name;
        let temp3 = data.list[24].main.temp;
        let wdescription3 = data.list[24].weather[0].description

        setcityName3(city3); // update the state with city name
        setMainTemp3(temp3);
        setWeatherDescription3(wdescription3);

        let city4 = data.city.name;
        let temp4 = data.list[32].main.temp;
        let wdescription4 = data.list[32].weather[0].description

        setcityName4(city4); 
        setMainTemp4(temp4);
        setWeatherDescription4(wdescription4);


    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const fetchData = async () => {
                    const data = await CityInput({ lat, lon });
                };
                fetchData();
            });
        }
    }, []);
  
    
    return (
        
            <>
            <Row>
                <Col>
                    <Navbar collapseOnSelect expand="xl" bg='secondary'>
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="Favorites" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">City 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            City 2
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">City 3</NavDropdown.Item>
                                        <NavDropdown.Item>City 4</NavDropdown.Item>
                                        <NavDropdown.Item>City 5</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search City"
                                            className="me-2"
                                            aria-label="Search"
                                            onChange={(e) => setUserInput(e.target.value)}
                                        />
                                        <Button onClick={handleOnClick} variant="outline-dark">Search</Button>
                                    </Form>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>

            <Container>
                <Row>
                    <Col className='fiveDay'>
                        <h1>5 Day Weather Forecast</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={6} md={5} lg={6} xxxl={6}>
                        <Card>
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Current Weather</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>City Name: {cityName}</p>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className=' d-flex justify-content-center'>
                    <Col lg={5} xl={2} md={5} className='cCuz'>
                    <Card  >
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Monday</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp1}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription1}</p>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} xl={2} md={5} className='cCuz'>
                    <Card>
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Tuesday</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp2}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription2}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={2} md={4} className='cCuz'>
                    <Card  >
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Wednesday</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp3}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription3}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={2} md={4} className='cCuz'>
                    <Card  >
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Thursday</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp4}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription4}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xl={2} md={4} className='cCuz'>
                    <Card  >
                            <Card.Body className='boxColor'>
                                <Card.Title className='d-flex justify-content-center'>Friday</Card.Title>
                                <br/>
                                <Card.Text>
                                    <p className='d-flex justify-content-center'>Temp: {mainTemp4}</p>
                                    <p className='d-flex justify-content-center'>Description: {weatherDescription4}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


     </>
    )
}