import localFont from "next/font/local";

const estedadRegular = localFont({ src: "../../public/fonts/Estedad-Regular.ttf" });
const estedadBold = localFont({ src: "../../public/fonts/Estedad-Bold.ttf" });
const estedadSemiBold = localFont({ src: "../../public/fonts/Estedad-SemiBold.ttf" });
const estedadMedium = localFont({ src: "../../public/fonts/Estedad-Medium.ttf" });

const EstedadRegular = estedadRegular.className;
const EstedadBold = estedadBold.className;
const EstedadSemiBold = estedadSemiBold.className;
const EstedadMedium = estedadMedium.className;

export { EstedadRegular, EstedadBold, EstedadSemiBold, EstedadMedium };