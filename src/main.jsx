import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout.jsx';
import '../src/css/reset.css';
import '../src/css/global.css';
import {
	HotelCards,
	ActiveRecreation,
	NewsPage,
	ArticlePage,
	BookingPage,
	ErrorPage,
	Gallery,
	HotelsDescriptions,
	MainPage,
	MapPage,
	Questions,
	ReviewsPage,
	SalesPage,
	SportsDescription,
} from './pages';

import {
	createBrowserRouter,
	RouterProvider as Router,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'hotels',
        element: <HotelCards />,
			},
			{
				path: 'active',
				element: <ActiveRecreation />,
			},
			{
				path: 'news',
				element: <NewsPage />,
			},
			{
				path: 'article',
				element: <ArticlePage />,
			},
			{
				path: 'booking',
				element: <BookingPage />,
			},
			{
				path: 'error',
				element: <ErrorPage />,
			},
			{
				path: 'gallery',
				element: <Gallery />,
			},
			{
				path: 'description',
				element: <HotelsDescriptions />,
			},
			{
				path: 'main',
				element: <MainPage />,
			},
			{
				path: 'map',
				element: <MapPage />,
			},
			{
				path: 'questions',
				element: <Questions />,
			},
			{
				path: 'reviews',
				element: <ReviewsPage />,
			},
			{
				path: 'sales',
				element: <SalesPage />,
			},
			{
				path: 'sports-description',
				element: <SportsDescription />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router router={router} />
	</React.StrictMode>
);
