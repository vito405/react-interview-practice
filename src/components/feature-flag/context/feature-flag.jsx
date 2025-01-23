import { createContext, useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";



export const FeatureFlagsContext = createContext()

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({})

    async function fetchFeatureFlags() {
        try {
            setLoading(true)
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnabledFlags(response)
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
            throw new Error
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, [])


    return <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
        {children}
    </FeatureFlagsContext.Provider>
}