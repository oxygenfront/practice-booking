import { Hotels, Options, ActiveSportsItems, SpecialRequests, VideoView, SearchingTours } from '../components'
export function MainPage() {
	return (
		<>
			<SearchingTours />
			<Hotels />
			<Options />
			<ActiveSportsItems />
			<SpecialRequests />
			<VideoView />
		</>
	)
}
