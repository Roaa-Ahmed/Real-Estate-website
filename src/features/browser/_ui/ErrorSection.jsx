import React from 'react'
import {Section,ButtonLocal} from '@/Components'

const ErrorSection = ({error,refetch}) => {
  return (
<Section variant="!text-black ">
        <div className="min-h-[50px] flex justify-center items-center">
          {error?.message?.toLowerCase?.().includes("network error") ? (
            <span>Please check your internet connection</span>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-3">
                Something went wrong. Please try again.
              </p>
              <ButtonLocal
                variant="!text-gray-700 gray-interactive"
                onClick={refetch}
              >
                retry
              </ButtonLocal>
            </div>
          )}
        </div>
      </Section>  )
}

export default ErrorSection