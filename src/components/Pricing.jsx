"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { CheckIcon, EuroIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import GradientShadowButton from "../utils/GradientShadowButton";
import AnimatedGradientText from "../utils/AnimatedGradientText";
const pricingData = [
  {
    title: "Explorer",
    description: "Discover & join local hobby groups",
    price: {
      monthly: 0,
      annually: 0,
    },
    features: ["Join up to 3 groups", "Basic event RSVPs", "Group chat access"],
    infos: ["Perfect for getting started", "Great for casual explorers"],
    cta: "Start free",
  },
  {
    title: "Enthusiast",
    description: "For power joiners & active members",
    price: {
      monthly: 500,
      annually: 400,
    },
    features: [
      "Unlimited group joins",
      "Event reminders & calendar sync",
      "Photo sharing in groups",
    ],
    infos: ["Member badges & profiles", "Priority email support"],
    cta: "Join as Enthusiast",
  },
  {
    title: "Organizer",
    description: "Create and grow your own group",
    price: {
      monthly: 1000,
      annually: 900,
    },
    features: [
      "Host events & manage RSVPs",
      "Waitlists & attendance caps",
      "Announcements & scheduled posts",
    ],
    infos: [
      "Suggested member invites",
      "Basic insights (growth & engagement)",
      "Email + chat support",
    ],
    isBestValue: true,
    cta: "Start a group",
  },
  {
    title: "Community Pro",
    description: "Run multiple groups like a pro",
    price: {
      monthly: 2000,
      annually: 1800,
    },
    features: [
      "Manage up to 5 groups",
      "Advanced analytics & exports",
      "Co-organizers & roles",
    ],
    infos: ["Sponsor slots on event pages", "Priority support & onboarding"],
    cta: "Upgrade to Pro",
  },
];

export default function ManyOffersVariant1() {
  const [selectedBilledType, setSelectedBilledType] = useState("monthly");

  function handleSwitchTab(tab) {
    setSelectedBilledType(tab);
  }

  return (
    <div className=" max-sm:mt-10 flex roboto-medium flex-col items-center gap-4">
      <SelectOfferTab
        handleSwitchTab={handleSwitchTab}
        selectedBilledType={selectedBilledType}
      />

      <div className="grid  w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
        {pricingData.map((offer) => (
          <OfferCard
            key={offer.title}
            {...offer}
            selectedBilledType={selectedBilledType}
          />
        ))}
      </div>
    </div>
  );
}

const OfferCard = ({
  title,
  description,
  price,
  features,
  infos,
  isBestValue,
  selectedBilledType,
}) => {
  function getAnnualPrice() {
    return price.annually * 12;
  }
  return (
    <div
      className={cn(
        "hover:-translate-y-1   h-full transform-gpu overflow-hidden rounded-2xl border bg-neutral-800/95 transition-all duration-300 ease-in-out hover:bg-neutral-800/100 dark:bg-black",
        "text-white dark:text-neutral-400",
        isBestValue ? "border-[#ed8445]" : "border-neutral-500/50 "
      )}
    >
      <div
        className={cn("p-6")}
        style={
          isBestValue
            ? {
                background:
                  "radial-gradient(58.99% 10.42% at 50% 100.46%, rgba(251, 188, 5, .07) 0, transparent 100%), radial-gradient(135.76% 66.69% at 92.19% -3.15%, rgba(251, 5, 153, .1) 0, transparent 100%), radial-gradient(127.39% 38.15% at 22.81% -2.29%, rgba(239, 145, 84, .4) 0, transparent 100%)",
              }
            : {}
        }
      >
        <div className="font-semibold text-neutral-200 max-sm:text-base text-lg">
          {title === "Organizer" ? (
            <div>
              <AnimatedGradientText>{title}</AnimatedGradientText>
              <div className="ml-2 badge badge-xs badge-dash badge-warning ">
                Best Deal
              </div>
            </div>
          ) : (
            <AnimatedGradientText>{title}</AnimatedGradientText>
          )}
        </div>
        <div className="mt-2 text-neutral-400 max-sm:text-xs text-sm">
          {description}
        </div>
        <div className="mt-4">
          <div className="font-semibold max-sm:text-2xl text-4xl text-neutral-200">
            {price[selectedBilledType]}
            <span className=" max-sm:text-xs text-base">৳</span>
          </div>
          <div className="text-neutral-400 max-sm:text-xs text-sm">
            {selectedBilledType === "monthly"
              ? "billed monthly"
              : `${getAnnualPrice()} BDT billed annually`}
          </div>
        </div>

        <GradientShadowButton
          onClick={() => console.log(`Selected ${title}`)}
          className="my-12 w-full px-8 py-2 text-sm"
        >
          Select
        </GradientShadowButton>

        <p
          className={cn(
            "mb-4 max-sm:text-xs font-semibold text-sm tracking-tight "
          )}
        >
          This plan include :
        </p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li className="flex  items-center gap-2" key={feature}>
              <CheckIcon className="size-3.5 rounded-full stroke-neutral-300" />
              <div className=" max-sm:text-xs text-sm">{feature}</div>
            </li>
          ))}
        </ul>
        {infos && (
          <>
            <div className="my-6  h-px bg-neutral-600" />
            <ul className="space-y-2">
              {infos.map((feature) => (
                <li className="flex items-center gap-2" key={feature}>
                  <div className="size-1.5 rounded-full bg-neutral-500" />
                  <div className="max-sm:text-xs text-sm">{feature}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export function SelectOfferTab({ handleSwitchTab, selectedBilledType }) {
  const OfferList = ["monthly", "annually"];
  return (
    <nav className="flex  max-sm:flex-row">
      {OfferList.map((button) => (
        <button
          className={cn(
            " relative max-sm:text-xs inline-flex w-fit transform-gpu whitespace-nowrap px-6 py-2.5 font-semibold text-base capitalize tracking-tight transition-colors",
            selectedBilledType === button
              ? "text-neutral-700 dark:text-neutral-50"
              : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-300 "
          )}
          key={button}
          onClick={() => handleSwitchTab(button)}
          type="button"
        >
          {button}

          {selectedBilledType === button && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="-z-10  absolute top-0 right-0 bottom-0 left-0 rounded-full bg-neutral-200 dark:bg-neutral-800 "
              exit={{ opacity: 0, scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.95 }}
              layout={true}
              layoutId="pricing-focused-element"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="  size-full rounded-full" />
            </motion.div>
          )}
        </button>
      ))}
    </nav>
  );
}
