import { BugStorySchema, type BugStory } from "./_schemas";
import { z } from "zod";

export const bugStories: BugStory[] = z.array(BugStorySchema).parse([
  {
    id: "bug-001",
    title: "The Phantom Double-Booking",
    context: "Travel Booking Platform",
    bugDescription:
      "Two users simultaneously selecting the last available seat on a flight would both receive confirmation emails and be charged — but only one seat existed. The race condition occurred between the availability check and the booking commit in a microservices architecture with eventual consistency.",
    impact:
      "3 double-booking incidents in production within the first week of a new payment gateway integration, resulting in manual refunds and customer escalations to the CEO.",
    resolution:
      "Implemented optimistic locking with a version field on the inventory table, added a distributed lock via Redis for the critical booking window, and wrote a Playwright E2E test that simulates concurrent bookings using parallel browser contexts.",
    lesson:
      "Never trust a read-then-write pattern in distributed systems. If two requests can race, they will race — and your tests need to prove they can't.",
    tags: ["Race Condition", "Concurrency", "Microservices", "Playwright"],
  },
  {
    id: "bug-002",
    title: "The Silent Contract Breaker",
    context: "API Integration Testing",
    bugDescription:
      "A backend team silently changed the date format in the booking API response from ISO 8601 (2024-03-15T10:00:00Z) to a locale-specific string ('March 15, 2024'). No changelog, no version bump. The mobile app parsed it fine on US-locale devices but crashed on Indonesian-locale Android phones with a DateTimeParseException.",
    impact:
      "100% crash rate for Indonesian-locale users on the booking detail screen for 6 hours until a hotfix was deployed. Approximately 2,000 users affected during peak hours.",
    resolution:
      "Created a comprehensive API contract testing suite using schema validation in Postman collections. Added automated regression checks that compare response shapes against locked snapshots on every PR. Set up Slack alerts for any schema drift.",
    lesson:
      "API contracts are not 'nice to have' — they're the firewall between your frontend and chaos. If a field can change shape without breaking a test, your tests aren't testing enough.",
    tags: ["API Contract", "Schema Validation", "Mobile Crash", "Postman"],
  },
  {
    id: "bug-003",
    title: "The Invisible Scroll Trap",
    context: "Mobile App — Android WebView",
    bugDescription:
      "A hybrid mobile app used a WebView to render the hotel search results page. On Android 12+ devices with gesture navigation enabled, scrolling past the 20th result would trigger the system back gesture instead of continuing to scroll, effectively making results beyond page 1 unreachable.",
    impact:
      "Users could only see the first 20 hotel results on newer Android devices. Conversion rate for hotel bookings dropped 23% after the Android 12 rollout, and the team spent 2 weeks investigating before QA reproduced it on a physical device.",
    resolution:
      "Identified the conflict between the WebView's horizontal touch handling and Android's edge-back gesture zone. Applied a custom touch interceptor and added Appium-based tests specifically for gesture navigation devices using the Android 12+ emulator profile.",
    lesson:
      "Emulators don't catch everything. Some bugs only live on real hardware with real OS gestures. Always include physical device testing in your regression matrix for mobile releases.",
    tags: ["Mobile", "Android", "WebView", "Appium", "Gesture Navigation"],
  },
]);
