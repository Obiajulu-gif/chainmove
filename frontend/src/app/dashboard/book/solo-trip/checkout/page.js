// app/dashboard/book/solo-trip/checkout/page.js
import React, { Suspense } from 'react';
import Checkout from "./Checkout";
import Loader from "../../../../components/Loader"
export default function CheckoutPage() {
	return (
		<Suspense fallback={<div><Loader/></div>}>
			<Checkout />
		</Suspense>
	);
}
