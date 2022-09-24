import './Checkout.css';

function Checkout() {
    return (
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label> Full Name</label>
                                <input type="text" id="user-name" name="user-name" placeholder="Your Name" />
                                <label> Email</label>
                                <input type="text" id="user-email" name="user-email" placeholder="Your Email" />
                                <label> Address</label>
                                <input type="text" id="user-address" name="user-address" placeholder="Address" />
                                <label> City</label>
                                <input type="text" id="user-city" name="user-city" placeholder="City" />

                                <div className="row">
                                    <div className="col-50">
                                        <label>State</label>
                                        <input type="text" id="user-state" name="user-state" placeholder="State" />
                                    </div>
                                    <div className="col-50">
                                        <label>Zip</label>
                                        <input type="text" id="user-zip" name="user-zip" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Method of Payment</h3>
                                <label>Full Name on Card</label>
                                <input type="text" id="cc-name" name="cc-name" placeholder="Name" />
                                <label>Credit Card Number</label>
                                <input type="text" id="cc-number" name="cc-number" placeholder="CC#" />
                                <label>Exp Month</label>
                                <input type="text" id="cc-expmonth" name="cc-expmonth" placeholder="MM" />

                                <div className="row">
                                    <div className="col-50">
                                        <label>Exp Year</label>
                                        <input type="text" id="cc-expyear" name="cc-expyear" placeholder="YYYY" />
                                    </div>
                                    <div className="col-50">
                                        <label>CVV</label>
                                        <input type="text" id="cvv" name="cvv" placeholder="CVV" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label>
                            <input type="checkbox" name="same-adr" />
                            Shipping Address Same as Billing
                        </label>
                        <input type="submit" value="Confirm Order" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;