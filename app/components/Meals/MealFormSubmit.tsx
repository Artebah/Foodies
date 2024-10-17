"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export const MealFormSubmit = () => {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Submitting..." : "Share Meal"}</button>;
};
