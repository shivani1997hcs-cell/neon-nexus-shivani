import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const notifications = [
  "Resume just downloaded",
  "New case study viewed: GreyOrange",
  "Shivani's profile shared on LinkedIn", 
  "Call booked via Calendly",
  "Technical Arsenal section visited",
  "Work experience timeline explored",
  "New visitor from London",
  "Contact form interaction detected"
];

const Notifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    };

    const hideNotification = () => {
      setIsVisible(false);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    // Then show notifications every 15 seconds
    const interval = setInterval(() => {
      hideNotification();
      setTimeout(showNotification, 500); // Brief pause between notifications
    }, 15000);

    // Hide each notification after 5 seconds
    const hideTimer = setInterval(() => {
      if (isVisible) {
        hideNotification();
      }
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearInterval(hideTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 notification-enter">
      <Card className="bg-card/95 backdrop-blur-sm border border-neon-cyan/30 shadow-neon-cyan p-4 max-w-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
            <p className="text-sm font-medium text-foreground">
              {notifications[currentNotification]}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="ml-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Notifications;