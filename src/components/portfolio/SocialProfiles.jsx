import React from "react";
import { SocialLink } from "@/components/common/SocialLink";
import { socialLinks } from "@/config/socialLinks";
import { cn } from "@/lib/utils";

export function SocialProfiles({ className }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {socialLinks.map((social) => (
        <SocialLink
          key={social.id}
          name={social.name}
          url={social.url}
          icon={social.icon}
          username={social.username}
          description={social.description}
          isConfigured={social.isConfigured}
          variant="card"
        />
      ))}
    </div>
  );
}
