import Footer from "./components/Footer";
import React from 'react'
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";

const App = () =>  {
  return (
    < >
    < Header />
      <main>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
 

    <Footer />
    </>
   
  );
 }

export default App;
