import { useState, useEffect } from "react";
import LeadGenerationForm from "./LeadGenerationForm";

const LeadFormOverlay = () => {
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    // Show the overlay after 10 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen the form
      const hasSeenForm = localStorage.getItem("hasSeenLeadForm");
      if (!hasSeenForm) {
        setShowForm(true);
        // Set flag in localStorage to avoid showing the form again in the same session
        localStorage.setItem("hasSeenLeadForm", "true");
      }
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setShowForm(false);
  };
  
  if (!showForm) return null;
  
  return <LeadGenerationForm isOverlay={true} onClose={handleClose} />;
};

export default LeadFormOverlay;