import data from "../../data/tools.json";
import type { Category, Tool, ToolsData } from "./types";

const toolsData = data as ToolsData;

export function getCategories(): Category[] {
  return toolsData.categories;
}

export function getAllTools(): Tool[] {
  return toolsData.tools;
}

export function getFeaturedTools(): Tool[] {
  return toolsData.tools.filter((t) => t.featured);
}

export function getEditorsPicks(): Tool[] {
  return toolsData.tools.filter((t) => t.featuredType === "editors-pick");
}

export function getSponsoredTools(): Tool[] {
  return toolsData.tools.filter((t) => t.featuredType === "sponsored");
}

export function getNewTools(): Tool[] {
  return toolsData.tools
    .filter((t) => t.isNew)
    .sort((a, b) => b.releasedAt.localeCompare(a.releasedAt));
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return toolsData.tools.filter((t) => t.categories.includes(categoryId));
}

export function getCategoryName(id: string): string {
  return toolsData.categories.find((c) => c.id === id)?.name ?? id;
}

export function getToolsGroupedByCategory(): {
  category: Category;
  tools: Tool[];
}[] {
  return toolsData.categories
    .map((category) => ({
      category,
      tools: getToolsByCategory(category.id),
    }))
    .filter((g) => g.tools.length > 0);
}
