// app/dashboard/book/solo-trip/checkout/page.js
import React, { Suspense } from "react";
import Checkout from "./Checkout";

export default function CheckoutPage() {
	return (
		<Suspense fallback={<div>Loading checkout...</div>}>
			<Checkout />
		</Suspense>
	);
}
