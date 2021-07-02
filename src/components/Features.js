/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import * as Icons from "@heroicons/react/outline";
import React from "react";

const features = [
  { name: "Push to Deploy", icon: CloudUploadIcon },
  { name: "SSL Certificates", icon: LockClosedIcon },
  { name: "Simple Queues", icon: RefreshIcon },
  { name: "Advanced Security", icon: ShieldCheckIcon },
  { name: "Powerful API", icon: CogIcon },
  { name: "Database Backups", icon: ServerIcon },
];

export default function Features(props) {
  console.log(CloudUploadIcon, "check 1");
  console.log(props.features, "check");
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          {props.feature.header}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {props.feature.boldHeader}
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          {props.feature.texting}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {props.feature.features.map((feature, index) => {
              const featureIconIndex = index % 6
              const featureIcon = features[featureIconIndex]
              return (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          {/* {Icons['CloudUploadIcon']} */}
                          <featureIcon.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.featureDescription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
