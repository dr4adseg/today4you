!function(){var t,o,a,c,e,n=document.getElementById("astra-mobile-cart-drawer"),d=document.getElementById("masthead");function r(){var e,t,a;document.addEventListener("keyup",function(e){27===e.keyCode&&(e.preventDefault(),n.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"),updateTrigger())}),document.addEventListener("click",function(e){e.target===document.querySelector(".ast-mobile-cart-active .astra-mobile-cart-overlay")&&(n.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"))}),void 0!==o&&""!==o&&null!==o&&(e="flyout"==astra_cart.desktop_layout?document.querySelectorAll(".ast-mobile-header-wrap .ast-header-woo-cart, #ast-desktop-header .ast-desktop-cart-flyout"):document.querySelectorAll(".ast-mobile-header-wrap .ast-header-woo-cart"),t=document.querySelector(".ast-mobile-header-wrap .ast-header-edd-cart"),a=document.querySelector(".astra-cart-drawer-close"),0<e.length&&e.forEach(function(e){void 0!==e&&""!==e&&null!==e&&n&&(e.addEventListener("click",cartFlyoutOpen,!1),e.cart_type="woocommerce")}),void 0!==t&&""!==t&&null!==t&&n&&(t.addEventListener("click",cartFlyoutOpen,!1),t.cart_type="edd"),void 0!==a)&&""!==a&&null!==a&&a.addEventListener("click",cartFlyoutClose,!1)}d&&(t="",o=d.querySelector("#ast-mobile-header"),a="",void 0!==n&&""!==n&&null!==n&&(t=n.querySelector(".widget_shopping_cart.woocommerce"),a=n.querySelector(".widget_edd_cart_widget")),cartFlyoutOpen=function(e){e.preventDefault();e=e.currentTarget.cart_type;"woocommerce"===e&&document.body.classList.contains("woocommerce-cart")||(n.classList.remove("active"),n.classList.remove("woocommerce-active"),n.classList.remove("edd-active"),void 0!==n&&""!==n&&null!==n&&(n.classList.add("active"),document.documentElement.classList.add("ast-mobile-cart-active"),void 0!==a&&""!==a&&null!==a&&(a.style.display="block","woocommerce"===e)&&(a.style.display="none",n.classList.add("woocommerce-active")),void 0!==t)&&""!==t&&null!==t&&(t.style.display="block","edd"===e)&&(t.style.display="none",n.classList.add("edd-active")))},cartFlyoutClose=function(e){e.preventDefault(),void 0!==n&&""!==n&&null!==n&&(n.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"))},c=window.innerWidth,window.addEventListener("resize",function(){var e,t=document.querySelector(".astra-cart-drawer-close");void 0!==t&&""!==t&&null!==t&&"INPUT"!==document.activeElement.tagName&&n.classList.contains("active")&&(e=window.innerWidth)!==c&&(c=e,t.click())}),window.addEventListener("load",function(){r()}),document.addEventListener("astLayoutWidthChanged",function(){r()}),document.addEventListener("astPartialContentRendered",function(){r()}),window.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(function(){r(),document.dispatchEvent(new CustomEvent("astLayoutWidthChanged",{detail:{response:""}}))},50)}))}();