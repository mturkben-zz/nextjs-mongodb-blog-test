// icon library https://react-icons.github.io/
import {
	IoAccessibilityOutline,
	IoAddCircleOutline,
	IoAlbumsOutline,
	IoAlertCircleOutline,
	IoAppsOutline,
	IoBagHandleOutline,
	IoBanOutline,
	IoCalculatorSharp,
	IoCameraReverseSharp,
	IoContractOutline
} from "react-icons/io5";

const ICON_SIZE = 30;

const leftBar = [
	{
		title: "Add Blogs",
		icon: <IoAddCircleOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Accessibility",
		icon: <IoAccessibilityOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Albums",
		icon: <IoAlbumsOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Alert",
		icon: <IoAlertCircleOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Apps",
		icon: <IoAppsOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Bag",
		icon: <IoBagHandleOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Ban",
		icon: <IoBanOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Calculator",
		icon: <IoCalculatorSharp size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Camera",
		icon: <IoCameraReverseSharp size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
	{
		title: "Contract",
		icon: <IoContractOutline size={ICON_SIZE}/>,
		url: "pages/add-blog",
	},
]

export {
	leftBar
}

