//Browse Vendor Search Page
import search from "./Browse/BrowsePage/Search";

//Vendor browse components
import viewaboutvendor from "./Browse/VendorPage/components/ViewAboutVendor";
import viewvendorposts from "./Browse/VendorPage/components/ViewVendorPosts";
import viewvendorproduct from "./Browse/VendorPage/components/ViewVendorProduct";
import viewvendorproducts from "./Browse/VendorPage/components/ViewVendorProducts";

//Landing page Components
import landinggallery from "./Landing/LandingGallery";
import carouseltop from "../components/Landing/CarouselTop";

// Profile  bulletin components
import addpostform from "../components/Profile/Bulletin/AddPostForm";
import bulletin from "../components/Profile/Bulletin/Bulletin";
import vendorpost from "../components/Profile/Bulletin/VendorPost";
import vendorpostlist from "../components/Profile/Bulletin/VendorPostList";

// Profile  product components

import product from "../components/Profile/Product/Product";
import vendorproducts from "../components/Profile/Product/VendorProducts";
import editproduct from "../components/Profile/Product/EditProduct";
import editproductform from "../components/Profile/Product/EditProductForm";
import productimagesuploader from "../components/Profile/Product/ProductImageUploader";

//Profile  About vendor components
import about from "../components/Profile/Profile/About";
import aboutform from "../components/Profile/Profile/AboutForm";
import banneruploader from "../components/Profile/Profile/BannerUploader";
import vendorcategories from "../components/Profile/Profile/VendorCategories";

// Register components
import registerall from "./Register/RegisterAll";

// Register vendor components
import registervendor from "./Register/Vendor/RegisterVendor";

// Shared components
import footer from "../components/shared/Footer";
import map from "../components/shared/Map";
import nav from "../components/shared/Nav";
import custombutton from "../components/shared/CustomButton";
import modal from "../components/shared/Modal";

// Shared components/ShoppingCart
import shoppingcartitems from "../components/shared/ShoppingCart/ShoppingCartItems";
import shoppingcartitem from "../components/shared/ShoppingCart/ShoppingCartItem";

// Dashboard components
import herobanner from "../components/Dashboard/HeroBanner";

// mobile components
import carouseltopmobile from "../components/Landing/CarouselTopMobile";

// Order Review components
import orderreviewitem from "../components/OrderReview/OrderReviewItem";

//Landing Components exports
export const LandingGallery = landinggallery;
export const CarouselTop = carouseltop;

// mobile components
export const CarouselTopMobile = carouseltopmobile;
// Browse exports
export const Search = search;

//Vendor exports
export const ViewAboutVendor = viewaboutvendor;
export const ViewVendorPosts = viewvendorposts;
export const ViewVendorProduct = viewvendorproduct;
export const ViewVendorProducts = viewvendorproducts;

//Profile bulletin components
export const AddPostForm = addpostform;
export const Bulletin = bulletin;
export const VendorPost = vendorpost;
export const VendorPostList = vendorpostlist;

// Profile product exports
export const Product = product;
export const VendorProducts = vendorproducts;
export const EditProduct = editproduct;
export const EditProductForm = editproductform;
export const ProductImageUploader = productimagesuploader;

//Profile About vendor exports
export const About = about;
export const AboutForm = aboutform;
export const VendorCategories = vendorcategories;

export const BannerUploader = banneruploader;

// Register components
export const RegisterAll = registerall;

// Register vendor components
export const RegisterVendor = registervendor;

// Shared components
export const Footer = footer;
export const Map = map;
export const Nav = nav;
export const CustomButton = custombutton;
export const Modal = modal;

// Shared components/ShoppingCart
export const ShoppingCartItems = shoppingcartitems;
export const ShoppingCartItem = shoppingcartitem;

// Dashboard exports
export const HeroBanner = herobanner;

// OrderReview exports
export const OrderReviewItem = orderreviewitem;
