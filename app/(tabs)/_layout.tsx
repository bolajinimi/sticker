import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "green",
                headerStyle: {
                    backgroundColor: "blue",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "yellow"
                }
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Sticker Smash",
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
            <Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ focused, color }) => (
						<Ionicons
							name={focused ? "information-circle" : "information-circle-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
