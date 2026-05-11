import { RecommendationSchema, type Recommendation } from "./_schemas";
import { z } from "zod";

/**
 * Recommendations from LinkedIn.
 * Re-enable Testimonials section in page.tsx when populated
 * with 2+ real LinkedIn recommendations.
 *
 * Schema: { id, quote, name, role, company, linkedinUrl? }
 */
export const recommendations: Recommendation[] = z.array(RecommendationSchema).parse([]);
