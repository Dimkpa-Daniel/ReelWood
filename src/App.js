import store from './redux/store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Paysuccess from "./pages/paySuccess";
import Dashboard from "./pages/Dashboard"
import Register from "./pages/register"
import Slider from "./pages/Slider";
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Eventdetails from "./pages/eventdetails"
import SelectTick from "./pages/SelectTicket";
import TicketForm from "./pages/TicketForm";
import Login from"./pages/login"
import Filter from "./pages/filter"
import Search from "./pages/search"

import Admin from "./pages/admin"
import Users from './pages/all-users'
import UsersProfile from "./pages/user-profile"
import EventDesc from './pages/admin-event-desc'
import AdminEvent from './pages/admin-event'
import AdminTicket from './pages/admin-tickets'

import Allevents from "./pages/allEvents"



import './styles/Homepage/Navbar.scss'
// import './styles/Homepage/BackgroundCarousel.scss'





function App() {
  return (
    <>
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <Router>
              <Switch>
                 <Route exact path='/'>
                    <Slider/>
                  </Route>
                  </Switch>
                  <Switch>
                    <Route exact path='/event/:id'>
                      <Eventdetails />
                    </Route>
                  </Switch>
                  <Switch>
                  <Route exact path='/PreceedPay'>
                    <SelectTick />
                  </Route>
                  </Switch>
                  <Switch>
                    <Route exact path='/create-event'>
                      <CreateEvent />
                    </Route>
                  </Switch>

                  <Switch>
                    <Route exact path='/dashboard'>
                      <Dashboard />
                    </Route>
                  </Switch> 

                  <Switch>
                    <Route exact path='/login'>
                      <Login />
                    </Route>
                  </Switch>
                  <Switch>
                    <Route exact path='/paysuccess'>
                      <Paysuccess />
                    </Route>
                  </Switch>
                  
                  <Switch>
                    <Route exact path='/register'>
                      <Register />
                    </Route>
                  </Switch>
                  
                  <Switch>
                    <Route exact path='/filter/:category'>
                      <Filter />
                    </Route>
            </Switch>
            
            <Switch>
                    <Route exact path='/search'>
                      <Search />
                    </Route>
                  </Switch>
                  
                  <Switch>
                    <Route exact path='/All-events'>
                      <Allevents />
                    </Route>
                  </Switch>

                  <Switch>
                    <Route exact path='/super-admin'>
                      <Admin />
                    </Route>
                  </Switch>

                  <Switch>
                    <Route exact path='/super-admin/user'>
                      <Users />
                    </Route>
                  </Switch>
            
                  <Switch>
                    <Route exact path='/profile/:userId'>
                      <UsersProfile />
                    </Route>
                  </Switch>
                  
                  <Switch>
                    <Route exact path='/admin-event'>
                      <AdminEvent />
                    </Route>
                  </Switch>

            
                  <Switch>
                    <Route exact path='/event-Description/:eventId'>
                      <EventDesc />
                    </Route>
                  </Switch>

                   <Switch>
                    <Route exact path='/admin-ticket'>
                      <AdminTicket />
                    </Route>
                  </Switch> 


                </Router>
        </PersistGate>
      </Provider>
      {/* <SelectTicket/> */}
      {/* <TicketForm/> */}
      {/* <Slider/> */}
    </>
  );
}

export default App;
