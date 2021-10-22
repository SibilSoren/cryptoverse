
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography, Space } from "antd";
import { addCoins } from "./app/cryptoCoinsSlice";
import { addGlobalStats } from './app/cryptoGlobalStatsSlice';
import { useEffect } from "react";
import { NavBar, Cryptocurrencies, CryptoDetails, HomePage, Exchanges, News } from "./components/index";


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    // console.log("Something")

    const globalStats = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/stats',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };
    const cryptoCoins = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };

    axios.request(globalStats).then(function (response) {
      // console.log(response.data);
      const data = response.data;
      dispatch(addGlobalStats({ ...data.data }));
    }).catch(function (error) {
      console.error(error);
    });

    axios.request(cryptoCoins).then(function (response) {
      // console.log(response.data);
      const data = response.data;
      dispatch(addCoins({ ...data.data }));
      // console.log("count")
    }).catch(function (error) {
      console.error(error);
    });
  }, []);


  return (
    <div className="app">
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>

          <div className="footer" >
            <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
              Cryptoverse <br />
              All Rights Reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
