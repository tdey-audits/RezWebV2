import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const checkEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    return existing !== null;
  },
});

export const addEmail = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      return { success: false, duplicate: true };
    }

    await ctx.db.insert("waitlist", { email: args.email });
    return { success: true, duplicate: false };
  },
});
