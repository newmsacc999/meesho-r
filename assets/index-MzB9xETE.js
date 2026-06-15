<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Meesho - Online Shopping India</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            padding-bottom: 0;
        }

        /* Header Styles */
        .meesho-header {
            background-color: #fff;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px 16px;
        }

        .header-topRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .hamburger-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .brand-logo {
            text-decoration: none;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .header-icon {
            background: none;
            border: none;
            cursor: pointer;
            position: relative;
            text-decoration: none;
            display: inline-flex;
        }

        .cart-wrapper {
            position: relative;
        }

        .badge {
            position: absolute;
            top: -8px;
            right: -12px;
            background-color: #9F2089;
            color: white;
            border-radius: 50%;
            font-size: 10px;
            font-weight: bold;
            min-width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 4px;
        }

        .header-search {
            width: 100%;
        }

        .search-box {
            display: flex;
            align-items: center;
            background-color: #f2f2f2;
            border-radius: 8px;
            padding: 8px 12px;
            gap: 8px;
        }

        .search-box input {
            flex: 1;
            border: none;
            background: none;
            outline: none;
            font-size: 14px;
        }

        /* Cart Sidebar */
        .cart-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1100;
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .cart-overlay.active {
            visibility: visible;
            opacity: 1;
        }

        .cart-sidebar {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            max-width: 400px;
            height: 100%;
            background: white;
            z-index: 1101;
            transition: right 0.3s ease;
            display: flex;
            flex-direction: column;
        }

        .cart-sidebar.active {
            right: 0;
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid #eee;
        }

        .cart-header h3 {
            font-size: 18px;
        }

        .cart-header button {
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: #666;
        }

        .cart-items {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
        }

        .cart-item {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #f0f0f0;
        }

        .cart-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
        }

        .cart-item-info {
            flex: 1;
        }

        .cart-item-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 6px;
        }

        .cart-item-price {
            color: #9F2089;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .cart-item-qty {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .qty-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: white;
            cursor: pointer;
            font-size: 18px;
        }

        .cart-footer {
            padding: 16px;
            border-top: 1px solid #eee;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            font-weight: bold;
            font-size: 18px;
        }

        .checkout-btn {
            width: 100%;
            background: #9F2089;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        /* Home Promo */
        .home-promo {
            background: white;
        }

        .full-width-img {
            width: 100%;
            display: block;
        }

        .deals-section {
            background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
            padding: 12px 16px;
        }

        .deals-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .deals-label {
            font-weight: bold;
            font-size: 18px;
            color: #e53935;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .timer-box {
            display: flex;
            align-items: center;
            gap: 6px;
            background: #e53935;
            padding: 8px 16px;
            border-radius: 40px;
            color: white;
            font-weight: bold;
        }

        /* Products Section */
        .products-section {
            padding: 20px 16px;
            background: #f5f5f5;
        }

        .section-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 16px;
            color: #333;
        }

        .product-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
        }

        .product-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .product-img img {
            width: 100%;
            height: 260px;
            object-fit: cover;
        }

        .product-details {
            padding: 12px;
        }

        .product-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .product-price {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }

        .sell-price {
            font-size: 18px;
            font-weight: bold;
            color: #9F2089;
        }

        .mrp-price {
            font-size: 13px;
            color: #999;
            text-decoration: line-through;
        }

        .off-percentage {
            font-size: 13px;
            color: #e53935;
            font-weight: 500;
        }

        .free-delivery {
            font-size: 12px;
            color: #4caf50;
            margin-bottom: 8px;
        }

        .ratings-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .rating-section {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .rating-chip {
            background: #059669;
            color: white;
            padding: 2px 6px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .review-count {
            font-size: 11px;
            color: #666;
        }

        .add-to-cart-btn {
            width: 100%;
            background: #9F2089;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }

        .add-to-cart-btn:hover {
            background: #7a1668;
        }

        /* Toast Notification */
        .toast-container {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2000;
        }

        .toast {
            background: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Footer */
        .mf-wrap {
            background: #1a1a2e;
            color: #fff;
            padding: 40px 20px 20px;
            margin-top: 20px;
        }

        .mf-brand {
            text-align: center;
            margin-bottom: 30px;
        }

        .mf-tagline {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 8px;
        }

        .mf-tagline-sub {
            font-size: 12px;
            opacity: 0.6;
        }

        .mf-divider {
            height: 1px;
            background: rgba(255,255,255,0.1);
            margin: 20px 0;
        }

        .mf-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
        }

        .mf-col-title {
            font-weight: bold;
            margin-bottom: 12px;
            font-size: 14px;
        }

        .mf-link {
            display: block;
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            font-size: 12px;
            margin-bottom: 8px;
        }

        .mf-link:hover {
            color: white;
        }

        .mf-policy-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .mf-policy-link {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            font-size: 12px;
        }

        .mf-dot {
            color: rgba(255,255,255,0.3);
        }

        .mf-pay-icons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .mf-pay-chip {
            background: rgba(255,255,255,0.1);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
        }

        .mf-social-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .mf-social-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(255,255,255,0.1);
            padding: 8px 16px;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            font-size: 12px;
        }

        .mf-trust {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
        }

        .mf-trust-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            opacity: 0.8;
        }

        .mf-copyright {
            text-align: center;
            font-size: 11px;
            opacity: 0.6;
            margin-top: 20px;
        }

        /* Checkout Page Styles */
        .co-main {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px 16px 100px;
        }

        .step-bar {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            position: relative;
        }

        .step-bar::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 10%;
            right: 10%;
            height: 2px;
            background: #e0e0e0;
            z-index: 0;
        }

        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            z-index: 1;
            background: white;
            padding: 0 8px;
        }

        .step-dot {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: white;
            border: 2px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: #999;
        }

        .step.active .step-dot {
            border-color: #9F2089;
            color: #9F2089;
        }

        .step.done .step-dot {
            background: #9F2089;
            border-color: #9F2089;
            color: white;
        }

        .step-lbl {
            font-size: 10px;
            color: #999;
        }

        .step.active .step-lbl {
            color: #9F2089;
            font-weight: bold;
        }

        .co-page-heading {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .co-form-card {
            background: white;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 16px;
        }

        .co-field-wrap {
            margin-bottom: 18px;
        }

        .co-field-wrap label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: #666;
            margin-bottom: 6px;
        }

        .co-field-wrap input {
            width: 100%;
            padding: 12px;
            border: 1.5px solid #e0e0e0;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
        }

        .co-field-wrap input:focus {
            border-color: #9F2089;
        }

        .co-field-error input {
            border-color: #ef4444;
        }

        .co-error-msg {
            font-size: 11px;
            color: #ef4444;
            margin-top: 4px;
            display: block;
        }

        .co-row-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .co-trust-banner img {
            width: 100%;
            border-radius: 12px;
        }

        .co-sticky-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 12px 16px;
            border-top: 1px solid #eee;
            z-index: 100;
        }

        .co-sticky-cta button {
            width: 100%;
            background: #9F2089;
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        /* Product Page */
        .product-header {
            background: white;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid #f0f0f0;
        }

        .product-header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .ph-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .ph-back-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .product-page-main {
            max-width: 500px;
            margin: 0 auto;
            padding-bottom: 100px;
        }

        .product-gallery {
            background: white;
            padding: 16px;
        }

        .main-image-container {
            position: relative;
        }

        .main-image-container img {
            width: 100%;
            border-radius: 12px;
        }

        .product-info-card {
            background: white;
            padding: 16px;
            margin-top: 8px;
        }

        .product-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .pricing-row {
            display: flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 12px;
        }

        .current-price {
            font-size: 24px;
            font-weight: bold;
            color: #9F2089;
        }

        .mrp-price-pd {
            font-size: 14px;
            color: #999;
            text-decoration: line-through;
        }

        .discount-pill {
            background: #e53935;
            color: white;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }

        .free-delivery-tag {
            color: #4caf50;
            font-size: 14px;
            font-weight: 500;
        }

        .seller-card {
            background: white;
            padding: 16px;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .seller-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .seller-info-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .sold-by-badge {
            font-size: 11px;
            color: #999;
        }

        .seller-shop-name {
            font-weight: 600;
            font-size: 14px;
        }

        .seller-rating-badge {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            color: #059669;
            font-weight: bold;
        }

        .product-details-card {
            background: white;
            padding: 16px;
            margin-top: 8px;
        }

        .card-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 12px;
        }

        .product-desc-content {
            font-size: 14px;
            line-height: 1.6;
            color: #444;
        }

        .product-desc-content p {
            margin-bottom: 10px;
        }

        .button-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            gap: 12px;
            padding: 12px 16px;
            background: white;
            border-top: 1px solid #eee;
            z-index: 100;
        }

        .buynow-button {
            flex: 1;
            padding: 14px;
            border-radius: 8px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .buynow-white {
            background: white;
            border: 1px solid #9F2089;
            color: #9F2089;
        }

        .buynow-purple {
            background: #9F2089;
            color: white;
        }

        /* Cart Page */
        .cart-page-main {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px 16px 100px;
        }

        .cp-section-card {
            background: white;
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 12px;
        }

        .cp-cart-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 16px;
        }

        .cp-item-row-wrap {
            margin-bottom: 16px;
        }

        .cp-item-row {
            display: flex;
            gap: 12px;
        }

        .cp-item-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
        }

        .cp-item-details {
            flex: 1;
        }

        .cp-item-top {
            display: flex;
            justify-content: space-between;
            align-items: start;
        }

        .cp-item-name {
            font-size: 14px;
            font-weight: 500;
            flex: 1;
        }

        .cp-delete-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .cp-price-now {
            font-size: 16px;
            font-weight: bold;
            color: #9F2089;
        }

        .cp-qty-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 8px;
        }

        .cp-qty-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: white;
            cursor: pointer;
        }

        .cp-delivery-title {
            font-weight: bold;
            margin-bottom: 12px;
        }

        .cp-delivery-option {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            margin-bottom: 8px;
            cursor: pointer;
        }

        .cp-delivery-option.selected {
            border-color: #9F2089;
            background: #fdf7ff;
        }

        .cp-radio-circle {
            width: 18px;
            height: 18px;
            border: 2px solid #ccc;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cp-radio-dot {
            width: 10px;
            height: 10px;
            background: #9F2089;
            border-radius: 50%;
        }

        .cp-delivery-info {
            flex: 1;
        }

        .cp-delivery-name {
            font-size: 14px;
            font-weight: 500;
        }

        .cp-delivery-sub {
            font-size: 11px;
            color: #888;
        }

        .cp-delivery-price {
            font-weight: bold;
        }

        .cp-free-val {
            color: #16a34a;
        }

        .cp-summary-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
        }

        .cp-summary-divider {
            height: 1px;
            background: #f0f0f0;
        }

        .cp-summary-total {
            font-weight: bold;
            font-size: 16px;
        }

        .cp-safety-card img {
            width: 100%;
            border-radius: 12px;
        }

        .cp-sticky-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 12px 16px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cp-footer-price {
            font-size: 20px;
            font-weight: bold;
            color: #9F2089;
        }

        .cp-continue-btn {
            background: #9F2089;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
        }

        .empty-wrap {
            text-align: center;
            padding: 40px 20px;
        }

        .empty-wrap h2 {
            font-size: 20px;
            margin: 16px 0 8px;
        }

        .empty-wrap p {
            color: #666;
            margin-bottom: 20px;
        }

        .empty-shop-btn {
            background: #9F2089;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
        }

        /* Reviews */
        .new-reviews-container {
            background: white;
            padding: 16px;
            margin-top: 8px;
        }

        .rv-section-head {
            margin-bottom: 16px;
        }

        .rv-section-title {
            font-size: 18px;
            font-weight: bold;
        }

        .reviews-summary-new {
            display: flex;
            gap: 20px;
            padding: 16px;
            background: #fafafa;
            border-radius: 12px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .summary-left {
            text-align: center;
        }

        .main-rating-green {
            background: #059669;
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 24px;
            font-weight: bold;
        }

        .summary-bars {
            flex: 1;
            min-width: 180px;
        }

        .summary-bar-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }

        .bar-label {
            font-size: 11px;
            width: 60px;
        }

        .bar-bg {
            flex: 1;
            height: 6px;
            background: #e0e0e0;
            border-radius: 3px;
            overflow: hidden;
        }

        .bar-fill {
            height: 100%;
            border-radius: 3px;
        }

        .bar-count {
            font-size: 11px;
            color: #666;
            width: 35px;
        }

        .new-review-card {
            padding: 16px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .rv-top-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .rv-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
        }

        .rv-name-col {
            flex: 1;
        }

        .reviewer-name {
            font-weight: 600;
            font-size: 14px;
        }

        .rv-verified {
            font-size: 10px;
            color: #059669;
            margin-left: 6px;
            display: inline-flex;
            align-items: center;
            gap: 2px;
        }

        .review-date {
            font-size: 11px;
            color: #999;
        }

        .review-status-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .rv-stars {
            display: flex;
            gap: 2px;
        }

        .review-comment {
            font-size: 13px;
            color: #333;
            margin-bottom: 10px;
        }

        .rv-helpful-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 10px;
        }

        .rv-helpful-label {
            font-size: 11px;
            color: #666;
        }

        .helpful-btn-new {
            background: none;
            border: 1px solid #ddd;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 11px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        /* Admin Panel Styles */
        .adm-wrap {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px 16px 40px;
        }

        .adm-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 2px solid #9F2089;
        }

        .adm-header-label {
            font-size: 18px;
            font-weight: bold;
            color: #9F2089;
        }

        .adm-store-btn, .adm-logout-btn {
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
        }

        .adm-store-btn {
            background: #9F2089;
            color: white;
            border: none;
        }

        .adm-logout-btn {
            background: #ef4444;
            color: white;
            border: none;
        }

        .adm-section {
            background: white;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .adm-section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 16px;
            color: #333;
        }

        .adm-hint {
            font-size: 12px;
            color: #888;
            margin-bottom: 12px;
        }

        .adm-input-row {
            display: flex;
            gap: 10px;
            margin-bottom: 12px;
        }

        .adm-input {
            flex: 1;
            padding: 10px 12px;
            border: 1.5px solid #e0e0e0;
            border-radius: 8px;
            font-size: 14px;
        }

        .adm-save-btn {
            background: #9F2089;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
        }

        .adm-saved {
            background: #16a34a;
        }

        .adm-login-wrap {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #9F2089 0%, #6b0f5a 100%);
            padding: 20px;
        }

        .adm-login-card {
            background: white;
            border-radius: 24px;
            padding: 32px;
            width: 100%;
            max-width: 360px;
            text-align: center;
        }

        .adm-login-logo {
            margin-bottom: 20px;
        }

        .adm-login-sub {
            color: #666;
            margin-bottom: 24px;
        }

        .adm-pass-input {
            width: 100%;
            padding: 12px;
            border: 1.5px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 12px;
            font-size: 14px;
        }

        .adm-pass-err {
            border-color: #ef4444;
        }

        .adm-err-msg {
            color: #ef4444;
            font-size: 12px;
            margin-bottom: 12px;
        }

        .adm-login-btn {
            width: 100%;
            background: #9F2089;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            margin-bottom: 16px;
        }

        .adm-back-link {
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            font-size: 13px;
        }

        .adm-dropzone {
            border: 2px dashed #ccc;
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .adm-dropzone-hover {
            border-color: #9F2089;
            background: #fdf7ff;
        }

        .adm-link {
            color: #9F2089;
            text-decoration: underline;
        }

        .adm-csv-error {
            color: #ef4444;
            font-size: 12px;
            margin-top: 8px;
        }

        .adm-preview-box {
            margin-top: 16px;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            overflow: hidden;
        }

        .adm-preview-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background: #fafafa;
            border-bottom: 1px solid #e0e0e0;
        }

        .adm-import-btn {
            background: #9F2089;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
        }

        .adm-product-list, .adm-preview-box {
            max-height: 400px;
            overflow-y: auto;
        }

        .adm-product-row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-bottom: 1px solid #f0f0f0;
        }

        .adm-thumb {
            width: 48px;
            height: 48px;
            object-fit: cover;
            border-radius: 8px;
        }

        .adm-product-info {
            flex: 1;
        }

        .adm-product-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .adm-product-meta {
            font-size: 11px;
            color: #888;
        }

        .adm-del-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: #ef4444;
            padding: 8px;
        }

        .adm-reset-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
        }

        .adm-csv-example-wrap {
            margin-top: 16px;
        }

        .adm-csv-example {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 8px;
            font-size: 11px;
            overflow-x: auto;
            font-family: monospace;
        }

        .adm-toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 2000;
            animation: slideUp 0.3s ease;
        }

        @media (max-width: 640px) {
            .product-list {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            
            .product-img img {
                height: 180px;
            }
            
            .product-name {
                font-size: 12px;
            }
            
            .sell-price {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.8.0/umd/react-router-dom.development.js"></script>

    <script>
        // UPI Payment Handler
        function initiateUPIPayment(selectedMethod, upi_address, amt, orderNumber, site_name = "Online Store") {
            let redirect_url = "";
            
            switch (selectedMethod) {
                case "gpay":
                    redirect_url = `tez://upi/pay?pa=${upi_address}&pn=${encodeURIComponent("Online Store")}&tn=Order_Id_${orderNumber}&am=${amt}&tr=H2MkMGf5olejI&mc=8931&cu=INR`;
                    break;
                case "phonepe":
                    redirect_url = `phonepe://pay?pa=${upi_address}&pn=${encodeURIComponent(site_name)}&tn=Order_Id_${orderNumber}&am=${amt}&tr=H2MkMGf5olejI&mc=8931&cu=INR`;
                    break;
                case "paytm":
                    redirect_url = `paytmmp://pay?pa=${upi_address}&pn=${encodeURIComponent("Online Shopping")}&tn=Order_Id_${orderNumber}&am=${amt}&tr=H2MkMGf5olejI&mc=8931&cu=INR`;
                    break;
                case "bhim_upi":
                    redirect_url = `bhim://pay?pa=${upi_address}&pn=${encodeURIComponent("Online Store")}&tn=Order_Id_${orderNumber}&am=${amt}&tr=H2MkMGf5olejI&mc=8931&cu=INR`;
                    break;
                default:
                    redirect_url = `whatsapp://pay?pa=${upi_address}&pn=${encodeURIComponent("Online Store")}&tn=Order_Id_${orderNumber}&am=${amt}&tr=H2MkMGf5olejI&mc=8931&cu=INR`;
                    break;
            }
            
            window.location.href = redirect_url;
            
            setTimeout(() => {
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa";
            }, 2500);
            
            return redirect_url;
        }

        function detectPlatform() {
            const userAgent = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
            if (/android/.test(userAgent)) return "android";
            return "other";
        }

        function processUPIPayment(method, upiId, amount, orderId, storeName = "Online Store") {
            const platform = detectPlatform();
            const txRef = `TXN_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
            
            let paymentUrl = "";
            
            switch (method) {
                case "phonepe":
                    if (platform === "android") {
                        paymentUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR&tn=${txRef}`;
                    } else {
                        paymentUrl = `phonepe:upi://pay?pa=${upiId}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR&tn=${txRef}`;
                    }
                    break;
                case "paytm":
                    paymentUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR&tn=${txRef}`;
                    break;
                case "gpay":
                    paymentUrl = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR&tn=${txRef}`;
                    break;
                default:
                    paymentUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(storeName)}&am=${amount}&cu=INR&tn=${txRef}`;
            }
            
            window.location.href = paymentUrl;
            return { success: true, url: paymentUrl, transactionId: txRef };
        }

        if (typeof window !== 'undefined') {
            window.UPIPayment = {
                initiate: initiateUPIPayment,
                process: processUPIPayment,
                detectPlatform: detectPlatform
            };
        }

        // Product Data
        const defaultProducts = [
            { id: 1, name: "Premium 4KG Mix Dry Fruits Combo – Almonds, Cashews, Pistachios & Kishmish (1KG Each)", sellPrice: "₹219.00", mrpPrice: "₹5,999.00", offPercent: "97% off", rating: "3.9", reviewCount: "1374", imgUrl: "https://cdn.shopify.com/s/files/1/0728/8487/9496/files/Gemini_Generated_Image_mgf77cmgf77cmgf7.png?v=1774764915", freeDelivery: true },
            { id: 2, name: "Essential Grocery Mega Saver Combo – Rice 5KG, Atta 10KG, Sugar 5KG & Soya Oil 5L", sellPrice: "₹229.00", mrpPrice: "₹5,999.00", offPercent: "97% off", rating: "3.6", reviewCount: "6476", imgUrl: "https://cdn.shopify.com/s/files/1/0728/8487/9496/files/Gemini_Generated_Image_e5duave5duave5du.png?v=1774764917", freeDelivery: true },
            { id: 3, name: "Daily Essentials Mega Saver Combo – Atta 10KG, Basmati Rice 5KG, Sugar 5KG & Soya Oil 5L", sellPrice: "₹239.00", mrpPrice: "₹5,999.00", offPercent: "97% off", rating: "3.7", reviewCount: "4802", imgUrl: "https://cdn.shopify.com/s/files/1/0728/8487/9496/files/Gemini_Generated_Image_b7k5xsb7k5xsb7k5.png?v=1774764917", freeDelivery: true }
        ];

        // Initialize store
        let products = defaultProducts;
        let cart = [];

        try {
            const savedProducts = localStorage.getItem('nexshop_products');
            if (savedProducts) {
                const parsed = JSON.parse(savedProducts);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    products = parsed;
                }
            }
            const savedCart = localStorage.getItem('nexshop_cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        } catch(e) {}

        function saveCart() {
            localStorage.setItem('nexshop_cart', JSON.stringify(cart));
        }

        function addToCart(product) {
            const existing = cart.find(p => p.id === product.id);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...product, qty: 1 });
            }
            saveCart();
            showToast('Added to cart!');
        }

        function updateQty(productId, qty) {
            if (qty <= 0) {
                cart = cart.filter(p => p.id !== productId);
            } else {
                const item = cart.find(p => p.id === productId);
                if (item) item.qty = qty;
            }
            saveCart();
        }

        function showToast(msg) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = msg;
            const container = document.querySelector('.toast-container') || (() => {
                const div = document.createElement('div');
                div.className = 'toast-container';
                document.body.appendChild(div);
                return div;
            })();
            container.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        }

        // Simple Router
        function App() {
            const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || '/');
            const [cartOpen, setCartOpen] = React.useState(false);
            const [cartItems, setCartItems] = React.useState(cart);
            const [productList, setProductList] = React.useState(products);

            React.useEffect(() => {
                const handleHashChange = () => {
                    setCurrentPath(window.location.hash.slice(1) || '/');
                };
                window.addEventListener('hashchange', handleHashChange);
                return () => window.removeEventListener('hashchange', handleHashChange);
            }, []);

            React.useEffect(() => {
                setCartItems([...cart]);
            }, [cart]);

            const handleAddToCart = (product) => {
                addToCart(product);
                setCartItems([...cart]);
            };

            const handleUpdateQty = (id, qty) => {
                updateQty(id, qty);
                setCartItems([...cart]);
            };

            const navigate = (path) => {
                window.location.hash = path;
                setCurrentPath(path);
            };

            const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

            // Header Component
            const Header = () => (
                <header className="meesho-header">
                    <div className="header-container">
                        <div className="header-topRow">
                            <div className="header-left">
                                <button className="hamburger-btn" aria-label="Menu">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#333" strokeWidth="2" fill="none">
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                </button>
                                <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                                    <span style={{fontSize: '22px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                </a>
                            </div>
                            <div className="header-right">
                                <a href="#" className="header-icon" aria-label="Wishlist">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="#ED3843" d="M22 9.174c0 3.724-1.87 7.227-9.67 12.38a.58.58 0 0 1-.66 0C3.87 16.401 2 12.898 2 9.174S4.59 3.67 7.26 3.66c3.22-.081 4.61 3.573 4.74 3.774.13-.201 1.52-3.855 4.74-3.774C19.41 3.669 22 5.45 22 9.174Z"/>
                                    </svg>
                                </a>
                                <button className="header-icon cart-wrapper" onClick={() => setCartOpen(true)} aria-label="Cart">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="#9F2089" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                                    </svg>
                                    {cartCount > 0 && <span className="badge">{cartCount}</span>}
                                </button>
                            </div>
                        </div>
                        <div className="header-search">
                            <div className="search-box">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#94a3b8" strokeWidth="2" fill="none">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input type="text" placeholder="Search for Sarees, Kurtis, Cosmetics, etc." />
                            </div>
                        </div>
                    </div>
                </header>
            );

            // Cart Sidebar
            const CartSidebar = () => (
                <>
                    <div className={`cart-overlay ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(false)}></div>
                    <div className={`cart-sidebar ${cartOpen ? 'active' : ''}`}>
                        <div className="cart-header">
                            <h3>My Cart ({cartItems.reduce((s,i)=>s+i.qty,0)})</h3>
                            <button onClick={() => setCartOpen(false)}>×</button>
                        </div>
                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p style={{textAlign: 'center', color: '#666', padding: '20px'}}>Your cart is empty.</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.imgUrl} alt={item.name} />
                                        <div className="cart-item-info">
                                            <p className="cart-item-name">{item.name}</p>
                                            <p className="cart-item-price">{item.sellPrice}</p>
                                            <div className="cart-item-qty">
                                                <button className="qty-btn" onClick={() => handleUpdateQty(item.id, item.qty - 1)}>−</button>
                                                <span className="qty-num">{item.qty}</span>
                                                <button className="qty-btn" onClick={() => handleUpdateQty(item.id, item.qty + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="total-row">
                                    <span>Total Value:</span>
                                    <span>₹{cartItems.reduce((sum, item) => sum + parseFloat(item.sellPrice.replace(/[₹,]/g, '')) * item.qty, 0).toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn" onClick={() => { setCartOpen(false); navigate('/cart'); }}>Proceed to Buy</button>
                            </div>
                        )}
                    </div>
                </>
            );

            // Product Card Component
            const ProductCard = ({ product }) => (
                <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
                    <div className="product-img">
                        <img src={product.imgUrl} alt={product.name} loading="lazy" />
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            <span className="sell-price">{product.sellPrice}</span>
                            <span className="mrp-price">{product.mrpPrice}</span>
                            <span className="off-percentage">{product.offPercent}</span>
                        </div>
                        {product.freeDelivery && <p className="free-delivery">Free Delivery</p>}
                        <div className="ratings-row">
                            <div className="rating-section">
                                <div className="rating-chip">
                                    <span className="rating-num">{product.rating}</span>
                                    <svg width="10" height="10" viewBox="0 0 20 20" fill="#ffffff">
                                        <path d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"/>
                                    </svg>
                                </div>
                                <span className="review-count">({product.reviewCount})</span>
                            </div>
                        </div>
                        <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>Add to Cart</button>
                    </div>
                </div>
            );

            // Home Page
            const HomePage = () => (
                <>
                    <div className="home-promo">
                        <img src="https://cdn.shopify.com/s/files/1/0981/2262/9416/files/2f53o_1.gif?v=1773923883" alt="Biggest Brand Bash" className="full-width-img" />
                        <img src="https://cdn.shopify.com/s/files/1/0786/1610/1096/files/1.webp?v=1774803568" alt="Maha Sale" className="full-width-img" />
                        <div style={{background: 'linear-gradient(90deg,#e53935,#b71c1c)', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                            <span style={{fontSize: '18px'}}>⏰</span>
                            <span style={{color: '#fff', fontWeight: 800, fontSize: '0.95rem'}}>Offer Valid for Only 24 Hours — Hurry, Limited Stock!</span>
                            <span style={{fontSize: '18px'}}>🔥</span>
                        </div>
                        <img src="https://cdn.shopify.com/s/files/1/0981/2262/9416/files/xwgyl_800_1.webp?v=1773923882" alt="Benefits" className="full-width-img" />
                    </div>
                    <section className="products-section">
                        <h4 className="section-title">Products For You</h4>
                        <div className="product-list">
                            {productList.map(product => <ProductCard key={product.id} product={product} />)}
                        </div>
                    </section>
                </>
            );

            // Product Detail Page
            const ProductDetail = ({ id }) => {
                const product = productList.find(p => p.id === parseInt(id));
                if (!product) return <div style={{padding: '2rem', textAlign: 'center'}}>Product not found.</div>;

                return (
                    <>
                        <div className="product-header">
                            <div className="product-header-inner">
                                <div className="ph-left">
                                    <button className="ph-back-btn" onClick={() => navigate('/')}>
                                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.746 2.314C13.569 2.113 13.328 2 13.077 2c-.252 0-.492.113-.67.314L6.278 9.243a1.076 1.076 0 0 0 0 1.514l6.13 6.929c.37.419.969.419 1.339 0 .37-.419.304-1.17 0-1.514L8.292 10l5.454-6.172c.223-.25.362-1.105 0-1.514Z" fill="#666"/>
                                        </svg>
                                    </button>
                                    <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                                        <span style={{fontSize: '20px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                    </a>
                                </div>
                                <div className="ph-right">
                                    <button className="header-icon cart-wrapper" onClick={() => setCartOpen(true)}>
                                        <svg viewBox="0 0 24 24" width="22" height="22">
                                            <path fill="#9F2089" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0M1 2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 7 17h12v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.44 4H5.21L4.27 2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                        </svg>
                                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <main className="product-page-main">
                            <div className="product-gallery">
                                <div className="main-image-container">
                                    <img src={product.imgUrl} alt={product.name} style={{width: '100%', borderRadius: '12px'}} />
                                </div>
                            </div>
                            <div className="product-info-card">
                                <h1 className="product-title">{product.name}</h1>
                                <div className="pricing-row">
                                    <span className="current-price">{product.sellPrice}</span>
                                    <span className="mrp-price-pd">{product.mrpPrice}</span>
                                    <span className="discount-pill">{product.offPercent}</span>
                                </div>
                                {product.freeDelivery && <div className="free-delivery-tag">Free Delivery</div>}
                            </div>
                            <div className="seller-card">
                                <div className="seller-left">
                                    <div className="shop-icon-blue">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2c0 .55.45 1 1 1v5h10v-5h6c.55 0 1-.45 1-1zm-9 4H5v-3h7v3zm7 0h-5v-3h5v3z"/>
                                        </svg>
                                    </div>
                                    <div className="seller-info-text">
                                        <div className="seller-name-row">
                                            <span className="sold-by-badge">Sold by</span>
                                            <span className="seller-shop-name">meesho official</span>
                                        </div>
                                        <div className="seller-rating-badge">
                                            <span>4.4</span>
                                            <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <div className="button-container">
                            <button className="buynow-button buynow-white" onClick={() => handleAddToCart(product)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 7 17h12v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.44 4H5.21L4.27 2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#9F2089"/>
                                </svg>
                                Add to Cart
                            </button>
                            <button className="buynow-button buynow-purple" onClick={() => { handleAddToCart(product); navigate('/cart'); }}>
                                <svg width="20" height="20" fill="#fff">
                                    <path d="M1.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384ZM11.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384Z"/>
                                </svg>
                                Buy Now
                            </button>
                        </div>
                    </>
                );
            };

            // Cart Page
            const CartPage = () => {
                const total = cartItems.reduce((sum, item) => sum + parseFloat(item.sellPrice.replace(/[₹,]/g, '')) * item.qty, 0);
                
                return (
                    <>
                        <div className="product-header">
                            <div className="product-header-inner">
                                <div className="ph-left">
                                    <button className="ph-back-btn" onClick={() => navigate('/')}>
                                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.746 2.314C13.569 2.113 13.328 2 13.077 2c-.252 0-.492.113-.67.314L6.278 9.243a1.076 1.076 0 0 0 0 1.514l6.13 6.929c.37.419.969.419 1.339 0 .37-.419.304-1.17 0-1.514L8.292 10l5.454-6.172c.223-.25.362-1.105 0-1.514Z" fill="#666"/>
                                        </svg>
                                    </button>
                                    <span style={{fontSize: '20px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                </div>
                                <div className="ph-right">
                                    <button className="header-icon cart-wrapper" onClick={() => setCartOpen(true)}>
                                        <svg viewBox="0 0 24 24" width="22" height="22">
                                            <path fill="#9F2089" d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 0M1 2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 7 17h12v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.44 4H5.21L4.27 2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                        </svg>
                                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <main className="cart-page-main">
                            <div className="cp-section-card">
                                <div className="cp-cart-title">Cart</div>
                                {cartItems.length === 0 ? (
                                    <div className="empty-wrap">
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ddd">
                                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                                            <line x1="3" y1="6" x2="21" y2="6"/>
                                            <path d="M16 10a4 4 0 01-8 0"/>
                                        </svg>
                                        <h2>Your cart is empty!</h2>
                                        <p>Add some products to continue.</p>
                                        <button className="empty-shop-btn" onClick={() => navigate('/')}>Start Shopping</button>
                                    </div>
                                ) : (
                                    cartItems.map(item => {
                                        const price = parseFloat(item.sellPrice.replace(/[₹,]/g, ''));
                                        return (
                                            <div key={item.id} className="cp-item-row-wrap" style={{borderBottom: '1px solid #f0f0f0'}}>
                                                <div className="cp-item-row">
                                                    <img className="cp-item-img" src={item.imgUrl} alt={item.name} />
                                                    <div className="cp-item-details">
                                                        <div className="cp-item-top">
                                                            <div className="cp-item-name">{item.name}</div>
                                                            <button className="cp-delete-btn" onClick={() => handleUpdateQty(item.id, 0)}>🗑️</button>
                                                        </div>
                                                        <div className="cp-price-row">
                                                            <span className="cp-price-now">{item.sellPrice}</span>
                                                        </div>
                                                        <div className="cp-qty-row">
                                                            <button className="cp-qty-btn" onClick={() => handleUpdateQty(item.id, item.qty - 1)}>−</button>
                                                            <span className="cp-qty-val">{item.qty}</span>
                                                            <button className="cp-qty-btn" onClick={() => handleUpdateQty(item.id, item.qty + 1)}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                            {cartItems.length > 0 && (
                                <>
                                    <div className="cp-section-card">
                                        <div className="cp-summary-row">
                                            <span className="cp-sum-label">Total Product Price:</span>
                                            <span className="cp-sum-val">₹{total.toFixed(2)}</span>
                                        </div>
                                        <div className="cp-summary-divider"></div>
                                        <div className="cp-summary-row">
                                            <span className="cp-sum-label">Shipping:</span>
                                            <span className="cp-free-val cp-sum-val">FREE</span>
                                        </div>
                                        <div className="cp-summary-divider"></div>
                                        <div className="cp-summary-row cp-summary-total">
                                            <span className="cp-sum-label">Order Total :</span>
                                            <span className="cp-sum-val">₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="cp-safety-card">
                                        <img src="https://cdn.shopify.com/s/files/1/0987/4102/7106/files/WhatsApp_Image_2026-02-13_at_1.19.12_PM.jpg?v=1770980679" alt="Safety Priority" style={{width: '100%', borderRadius: '12px'}} />
                                    </div>
                                </>
                            )}
                            <div style={{height: '80px'}}></div>
                        </main>
                        {cartItems.length > 0 && (
                            <div className="cp-sticky-footer">
                                <div className="cp-footer-price">₹{total.toFixed(2)}</div>
                                <button className="cp-continue-btn" onClick={() => navigate('/checkout')}>Continue</button>
                            </div>
                        )}
                    </>
                );
            };

            // Checkout Page
            const CheckoutPage = () => {
                const [address, setAddress] = React.useState({ name: '', mobile: '', pincode: '', city: '', state: '', house: '', area: '' });
                const [errors, setErrors] = React.useState({});

                const handleChange = (field) => (e) => {
                    setAddress(prev => ({ ...prev, [field]: e.target.value }));
                    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
                };

                const handleSubmit = (e) => {
                    e.preventDefault();
                    const newErrors = {};
                    if (!address.name.trim()) newErrors.name = 'Required';
                    if (!address.mobile.trim() || !/^\d{10}$/.test(address.mobile.trim())) newErrors.mobile = 'Enter valid 10-digit mobile';
                    if (!address.pincode.trim() || !/^\d{6}$/.test(address.pincode.trim())) newErrors.pincode = 'Enter valid 6-digit pincode';
                    if (!address.city.trim()) newErrors.city = 'Required';
                    if (!address.state.trim()) newErrors.state = 'Required';
                    if (!address.house.trim()) newErrors.house = 'Required';
                    if (!address.area.trim()) newErrors.area = 'Required';
                    
                    if (Object.keys(newErrors).length === 0) {
                        sessionStorage.setItem('address', JSON.stringify(address));
                        navigate('/payment');
                    } else {
                        setErrors(newErrors);
                    }
                };

                return (
                    <>
                        <div className="product-header">
                            <div className="product-header-inner">
                                <div className="ph-left">
                                    <button className="ph-back-btn" onClick={() => navigate('/cart')}>
                                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                                            <path d="M13.746 2.314C13.569 2.113 13.328 2 13.077 2c-.252 0-.492.113-.67.314L6.278 9.243a1.076 1.076 0 0 0 0 1.514l6.13 6.929c.37.419.969.419 1.339 0 .37-.419.304-1.17 0-1.514L8.292 10l5.454-6.172c.223-.25.362-1.105 0-1.514Z" fill="#666"/>
                                        </svg>
                                    </button>
                                    <span style={{fontSize: '20px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                </div>
                            </div>
                        </div>
                        <main className="co-main">
                            <div className="step-bar">
                                {['Cart', 'Address', 'Payment', 'Summary'].map((label, idx) => (
                                    <div key={label} className={`step ${idx === 1 ? 'active' : idx < 1 ? 'done' : ''}`}>
                                        <div className="step-dot">{idx < 1 ? '✓' : idx + 1}</div>
                                        <span className="step-lbl">{label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="co-page-heading">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#e91e8c"/>
                                    <circle cx="12" cy="9" r="2.5" fill="#fff"/>
                                </svg>
                                Address
                            </div>
                            <div className="co-form-card">
                                <form onSubmit={handleSubmit}>
                                    <div className={`co-field-wrap ${errors.name ? 'co-field-error' : ''}`}>
                                        <label>Full Name</label>
                                        <input type="text" value={address.name} onChange={handleChange('name')} />
                                        {errors.name && <span className="co-error-msg">{errors.name}</span>}
                                    </div>
                                    <div className={`co-field-wrap ${errors.mobile ? 'co-field-error' : ''}`}>
                                        <label>Mobile number</label>
                                        <input type="tel" value={address.mobile} onChange={handleChange('mobile')} maxLength="10" />
                                        {errors.mobile && <span className="co-error-msg">{errors.mobile}</span>}
                                    </div>
                                    <div className={`co-field-wrap ${errors.pincode ? 'co-field-error' : ''}`}>
                                        <label>Pincode</label>
                                        <input type="text" value={address.pincode} onChange={handleChange('pincode')} maxLength="6" />
                                        {errors.pincode && <span className="co-error-msg">{errors.pincode}</span>}
                                    </div>
                                    <div className="co-row-2">
                                        <div className={`co-field-wrap ${errors.city ? 'co-field-error' : ''}`}>
                                            <label>City</label>
                                            <input type="text" value={address.city} onChange={handleChange('city')} />
                                            {errors.city && <span className="co-error-msg">{errors.city}</span>}
                                        </div>
                                        <div className={`co-field-wrap ${errors.state ? 'co-field-error' : ''}`}>
                                            <label>State</label>
                                            <input type="text" value={address.state} onChange={handleChange('state')} />
                                            {errors.state && <span className="co-error-msg">{errors.state}</span>}
                                        </div>
                                    </div>
                                    <div className={`co-field-wrap ${errors.house ? 'co-field-error' : ''}`}>
                                        <label>House No., Building Name</label>
                                        <input type="text" value={address.house} onChange={handleChange('house')} />
                                        {errors.house && <span className="co-error-msg">{errors.house}</span>}
                                    </div>
                                    <div className={`co-field-wrap ${errors.area ? 'co-field-error' : ''}`}>
                                        <label>Road name, Area, Colony</label>
                                        <input type="text" value={address.area} onChange={handleChange('area')} />
                                        {errors.area && <span className="co-error-msg">{errors.area}</span>}
                                    </div>
                                </form>
                            </div>
                            <div className="co-trust-banner">
                                <img src="https://cdn.shopify.com/s/files/1/0987/4102/7106/files/WhatsApp_Image_2026-02-13_at_1.19.11_PM.jpg?v=1770981110" alt="Secure Payments" />
                            </div>
                            <div style={{height: '90px'}}></div>
                        </main>
                        <div className="co-sticky-cta">
                            <button onClick={handleSubmit}>Save Address and Continue</button>
                        </div>
                    </>
                );
            };

            // Payment Page
            const PaymentPage = () => {
                const total = cartItems.reduce((sum, item) => sum + parseFloat(item.sellPrice.replace(/[₹,]/g, '')) * item.qty, 0);
                const [selectedMethod, setSelectedMethod] = React.useState('gpay');
                const upiId = localStorage.getItem('nexshop_upi') || 'mab.037323031180041@axisbank';

                const handlePay = () => {
                    const result = processUPIPayment(selectedMethod, upiId, total.toFixed(2), `ORD_${Date.now()}`, 'Meesho Store');
                    console.log('Payment initiated:', result);
                };

                const paymentMethods = [
                    { id: 'gpay', label: 'Google Pay', icon: 'https://cdn.shopify.com/s/files/1/0987/4102/7106/files/Untitled_design_7.png?v=1770983193' },
                    { id: 'phonepe', label: 'PhonePe', icon: 'https://cdn.shopify.com/s/files/1/0988/1590/1975/files/Untitled_design_10.png?v=1771233121' },
                    { id: 'paytm', label: 'Paytm', icon: 'https://cdn.shopify.com/s/files/1/0988/1590/1975/files/Untitled_design_8.png?v=1771233121' },
                    { id: 'bhim_upi', label: 'BHIM UPI', icon: 'https://cdn.shopify.com/s/files/1/0987/4102/7106/files/Untitled_design_6.png?v=1770983191' }
                ];

                return (
                    <>
                        <div style={{background: '#9f2089', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: '54px'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <button onClick={() => navigate('/checkout')} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                                        <path d="M13.746 2.314a1.576 1.576 0 0 0-2.34 0L5.278 9.243a1.576 1.576 0 0 0 0 2.514l6.129 6.929c.37.419.969.419 1.339 0 .37-.42.304-1.17 0-1.514L7.29 10l5.456-6.182c.222-.25.36-1.105 0-1.504Z" fill="#fff"/>
                                    </svg>
                                </button>
                                <span style={{fontSize: '20px', fontWeight: 'bold', color: 'white', marginLeft: '8px'}}>meesho</span>
                            </div>
                        </div>
                        <div style={{background: '#fff', padding: '14px 16px', borderBottom: '1px solid #f0f0f0'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h2 style={{margin: 0, fontSize: '1rem', fontWeight: 800}}>Select Payment Method</h2>
                                <div style={{display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#1d4ed8', fontWeight: 700}}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1d4ed8">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                    100% SAFE PAYMENTS
                                </div>
                            </div>
                        </div>
                        <div style={{background: '#fff', marginTop: '8px'}}>
                            <div style={{padding: '12px 16px', fontSize: '0.82rem', fontWeight: 800, borderBottom: '1px solid #f0f0f0'}}>PAY ONLINE</div>
                            {paymentMethods.map(method => (
                                <div key={method.id} onClick={() => setSelectedMethod(method.id)} style={{padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', cursor: 'pointer', background: selectedMethod === method.id ? '#fdf7ff' : '#fff'}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <div style={{width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${selectedMethod === method.id ? '#9f2089' : '#ccc'}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            {selectedMethod === method.id && <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#9f2089'}}></div>}
                                        </div>
                                        <span>{method.label}</span>
                                    </div>
                                    <img src={method.icon} alt={method.label} style={{width: '36px', height: '36px', objectFit: 'contain'}} />
                                </div>
                            ))}
                        </div>
                        <div style={{background: '#fff', marginTop: '8px', padding: '16px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: '0.88rem'}}>
                                <span style={{fontWeight: 600}}>Total Product Price:</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                            <div style={{height: '1px', background: '#efefef'}}></div>
                            <div style={{display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: '0.88rem'}}>
                                <span style={{fontWeight: 600}}>Shipping:</span>
                                <span style={{color: '#16a34a', fontWeight: 700}}>FREE</span>
                            </div>
                            <div style={{height: '1px', background: '#efefef'}}></div>
                            <div style={{display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: '0.92rem'}}>
                                <span style={{fontWeight: 800}}>Order Total:</span>
                                <span style={{fontWeight: 800}}>₹{total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid #eee', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{fontSize: '1.1rem', fontWeight: 800}}>₹{total.toFixed(2)}</div>
                            <button onClick={handlePay} style={{background: '#9f2089', color: '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer'}}>Pay Now</button>
                        </div>
                    </>
                );
            };

            // Footer
            const Footer = () => (
                <footer style={{background: '#1a1a2e', color: '#fff', padding: '40px 20px 20px', marginTop: '20px', textAlign: 'center'}}>
                    <div style={{marginBottom: '30px'}}>
                        <span style={{fontSize: '28px', fontWeight: 'bold'}}>meesho</span>
                        <p style={{fontSize: '14px', opacity: 0.8, marginTop: '8px'}}>India's #1 Social Commerce Platform</p>
                        <p style={{fontSize: '12px', opacity: 0.6}}>Har Ghar Meesho</p>
                    </div>
                    <div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '20px 0'}}></div>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', fontSize: '12px', opacity: 0.6'}}>
                        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>About Us</a>
                        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Help Center</a>
                        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Privacy Policy</a>
                        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Terms & Conditions</a>
                        <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Return Policy</a>
                    </div>
                    <div style={{height: '1px', background: 'rgba(255,255,255,0.1)', margin: '20px 0'}}></div>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', fontSize: '11px', opacity: 0.6}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>🔒 100% Secure</div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>🚚 Pan-India Delivery</div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>↺ Easy Returns</div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>💰 COD Available</div>
                    </div>
                    <div style={{marginTop: '20px', fontSize: '10px', opacity: 0.5}}>
                        © 2025 Fashnear Technologies Private Limited. All rights reserved.
                    </div>
                </footer>
            );

            // Admin Login Page (simplified)
            const AdminPage = () => {
                const [password, setPassword] = React.useState('');
                const [error, setError] = React.useState(false);
                const [isLoggedIn, setIsLoggedIn] = React.useState(sessionStorage.getItem('adm_auth') === '1');

                if (!isLoggedIn) {
                    const handleLogin = (e) => {
                        e.preventDefault();
                        if (password === 'admin123') {
                            sessionStorage.setItem('adm_auth', '1');
                            setIsLoggedIn(true);
                        } else {
                            setError(true);
                            setTimeout(() => setError(false), 1400);
                        }
                    };
                    return (
                        <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #9F2089 0%, #6b0f5a 100%)', padding: '20px'}}>
                            <div style={{background: 'white', borderRadius: '24px', padding: '32px', width: '100%', maxWidth: '360px', textAlign: 'center'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <span style={{fontSize: '28px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                </div>
                                <p style={{color: '#666', marginBottom: '24px'}}>Admin Panel</p>
                                <form onSubmit={handleLogin}>
                                    <input type="password" placeholder="Enter admin password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width: '100%', padding: '12px', border: `1.5px solid ${error ? '#ef4444' : '#e0e0e0'}`, borderRadius: '8px', marginBottom: '12px'}} autoFocus />
                                    {error && <p style={{color: '#ef4444', fontSize: '12px', marginBottom: '12px'}}>Incorrect password</p>}
                                    <button type="submit" style={{width: '100%', background: '#9F2089', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '16px'}}>Login</button>
                                </form>
                                <button onClick={() => navigate('/')} style={{background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '13px'}}>← Back to store</button>
                            </div>
                        </div>
                    );
                }

                return (
                    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #9F2089'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <span style={{fontSize: '24px', fontWeight: 'bold', color: '#9F2089'}}>meesho</span>
                                <span style={{fontSize: '18px', fontWeight: 'bold', color: '#9F2089'}}>Admin</span>
                            </div>
                            <div style={{display: 'flex', gap: '8px'}}>
                                <button onClick={() => navigate('/')} style={{background: '#9F2089', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer'}}>← Store</button>
                                <button onClick={() => { sessionStorage.removeItem('adm_auth'); setIsLoggedIn(false); }} style={{background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer'}}>Logout</button>
                            </div>
                        </div>
                        <div style={{background: 'white', borderRadius: '16px', padding: '20px', marginBottom: '20px'}}>
                            <h3 style={{marginBottom: '16px'}}>💳 Merchant UPI ID</h3>
                            <p style={{fontSize: '12px', color: '#888', marginBottom: '12px'}}>Customer payments go to this UPI ID.</p>
                            <div style={{display: 'flex', gap: '10px', marginBottom: '12px'}}>
                                <input type="text" defaultValue={localStorage.getItem('nexshop_upi') || ''} placeholder="yourname@upi" style={{flex: 1, padding: '10px', border: '1.5px solid #e0e0e0', borderRadius: '8px'}} id="upiInput" />
                                <button onClick={() => { const val = document.getElementById('upiInput').value; if(val) { localStorage.setItem('nexshop_upi', val); showToast('UPI Saved: ' + val); } }} style={{background: '#9F2089', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer'}}>Save UPI</button>
                            </div>
                        </div>
                        <div style={{background: 'white', borderRadius: '16px', padding: '20px'}}>
                            <h3 style={{marginBottom: '16px'}}>🛒 Current Products ({productList.length})</h3>
                            <div style={{maxHeight: '400px', overflowY: 'auto'}}>
                                {productList.map(product => (
                                    <div key={product.id} style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderBottom: '1px solid #f0f0f0'}}>
                                        <img src={product.imgUrl} alt="" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px'}} />
                                        <div style={{flex: 1}}>
                                            <div style={{fontSize: '14px', fontWeight: 500}}>{product.name.substring(0, 50)}...</div>
                                            <div style={{fontSize: '11px', color: '#888'}}>{product.sellPrice} · {product.offPercent}</div>
                                        </div>
                                        <button onClick={() => { const newProducts = productList.filter(p => p.id !== product.id); localStorage.setItem('nexshop_products', JSON.stringify(newProducts)); setProductList(newProducts); }} style={{background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '8px'}}>🗑️</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            };

            // Render current page
            const renderPage = () => {
                if (currentPath === '/') return <><Header /><HomePage /><Footer /></>;
                if (currentPath.startsWith('/product/')) return <ProductDetail id={currentPath.split('/')[2]} />;
                if (currentPath === '/cart') return <CartPage />;
                if (currentPath === '/checkout') return <CheckoutPage />;
                if (currentPath === '/payment') return <PaymentPage />;
                if (currentPath === '/admin') return <AdminPage />;
                return <><Header /><HomePage /><Footer /></>;
            };

            return (
                <>
                    {renderPage()}
                    <CartSidebar />
                    <div className="toast-container"></div>
                </>
            );
        }

        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
</body>
</html>
