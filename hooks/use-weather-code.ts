import { cloudImage, rainyImage, sunImage, sunRainyImage, sunSemiCloudImage, sunSnowyImage, sunStormImage } from "@/public/images";
import { StaticImageData } from "next/image";

const useWeatherCode = (code: number) => {
    let weather: string;
    let weatherImage: StaticImageData;
    switch (code) {
        case 1:
            weather = "mainly clear"
            weatherImage = sunImage
            break;

        case 2:
            weather = "partly cloudy"
            weatherImage = sunSemiCloudImage
            break;

        case 3:
            weather = "cloudy"
            weatherImage = cloudImage
            break;

        case 45:
            weather = "fog"
            weatherImage = cloudImage
            break;

        case 48:
            weather = "rime fog"
            weatherImage = cloudImage
            break;

        case 51:
            weather = "light dizzle"
            weatherImage = sunRainyImage
            break;

        case 53: 
            weather = "moderate dizzle"
            weatherImage = sunRainyImage
            break;

        case 55: 
            weather = "intensity dizzle"
            weatherImage = sunRainyImage
            break;

        case 56:
            weather = "light freezing dizzle"
            weatherImage = sunRainyImage
            break;

        case 57: 
            weather = "intensity freezing dizzle"
            weatherImage = sunRainyImage
            break;

        case 61:
            weather = "light rain"
            weatherImage = sunRainyImage
            break;

        case 63: 
            weather = "moderate rain"
            weatherImage = sunRainyImage
            break;

        case 66: 
            weather = "intensity rain"
            weatherImage = rainyImage
            break;

        case 66:
            weather = "light freezing rain"
            weatherImage = rainyImage
            break;

        case 67: 
            weather = "intensity freezing rain"
            weatherImage = rainyImage
            break;

        case 71:
            weather = 'light snow fall'
            weatherImage = sunSnowyImage
            break;

        case 73:
            weather = "moderate show fall"
            weatherImage = sunSnowyImage
            break;

        case 75:
            weather = "intensity show fall"
            weatherImage = sunSnowyImage
            break;

        case 77:
            weather = "snow grains"
            weatherImage = sunSnowyImage
            break;
        
        case 80:
            weather = "light rain showers"
            weatherImage = sunSnowyImage
            break;

        case 81:
            weather = "moderate rain showers"
            weatherImage = sunSnowyImage
            break;

        case 82:
            weather = "violent rain showers"
            weatherImage = sunSnowyImage
            break;

        case 85:
            weather = "light snow showers"
            weatherImage = sunSnowyImage
            break;

        case 86: 
            weather = "heavy snow showers"
            weatherImage = sunSnowyImage
            break;

        case 95:
            weather = "light or moderate thunderstorm"
            weatherImage = sunStormImage
            break;

        case 96:
            weather = "light hail with thunderstorm"
            weatherImage = sunStormImage
            break;

        case 99:
            weather = "heavy hail with thunderstorm"
            weatherImage = sunStormImage
            break;

        default:
            weather = "clear"
            weatherImage = sunImage
            break;
    }


    return { weather, weatherImage}
}

export default useWeatherCode;