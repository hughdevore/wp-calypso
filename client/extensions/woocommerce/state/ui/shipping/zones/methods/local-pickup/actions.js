/**
 * Internal dependencies
 */
import {
	WOOCOMMERCE_SHIPPING_ZONE_METHOD_SET_TAXABLE,
	WOOCOMMERCE_SHIPPING_ZONE_METHOD_SET_COST,
} from 'woocommerce/state/action-types';

export const setShippingIsTaxable = ( siteId, id, isTaxable ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_METHOD_SET_TAXABLE,
		siteId,
		methodType: 'local_pickup',
		id,
		isTaxable, // "Taxable" / "None"
	};
};

export const setShippingCost = ( siteId, id, cost ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_METHOD_SET_COST,
		siteId,
		methodType: 'local_pickup',
		id,
		cost,
	};
};
