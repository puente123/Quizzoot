function recommendResources(tag) {
    if (tag === "Physics") {
        console.log("Recommended YouTube Channel: Flipping Physics");
        console.log("https://www.youtube.com/@FlippingPhysics");

        console.log("\nRecommended YouTube Video: Introduction to Projectile Motion");
        console.log("https://www.youtube.com/watch?v=GiiWsXtt5GE");

        console.log("\nRecommended Tik-Tok Profile: Flipping Physics");
        console.log("https://www.tiktok.com/@flipping.physics");
    } else {
        console.log("No specific recommendations for this topic.");
    }
}

// Simulate topic analysis and print recommendations
const analyzedTopic = "Physics";
recommendResources(analyzedTopic);
