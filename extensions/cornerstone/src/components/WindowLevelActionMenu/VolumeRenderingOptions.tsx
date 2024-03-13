import React, { ReactElement } from 'react';
import { AllInOneMenu } from '@ohif/ui';
import { VolumeRenderingOptionsProps } from '../../types/ViewportPresets';
import { VolumeRenderingQuality } from './VolumeRenderingQuality';
import { VolumeMappingRange } from './VolumeMappingRange';
import { VolumeLighting } from './VolumeLighting';
import { VolumeShade } from './VolumeShade';
export function VolumeRenderingOptions({
  viewportId,
  commandsManager,
  volumeRenderingQualityRange,
  serviceManager,
}: VolumeRenderingOptionsProps): ReactElement {
  return (
    <AllInOneMenu.ItemPanel>
      <div className="all-in-one-menu-item flex w-full justify-center">
        <VolumeShade
          commandsManager={commandsManager}
          serviceManager={serviceManager}
          viewportId={viewportId}
        />
      </div>

      <VolumeRenderingQuality
        viewportId={viewportId}
        commandsManager={commandsManager}
        serviceManager={serviceManager}
        volumeRenderingQualityRange={volumeRenderingQualityRange}
      />

      <VolumeMappingRange
        viewportId={viewportId}
        commandsManager={commandsManager}
        serviceManager={serviceManager}
      />

      <VolumeLighting
        viewportId={viewportId}
        commandsManager={commandsManager}
        serviceManager={serviceManager}
      />
    </AllInOneMenu.ItemPanel>
  );
}