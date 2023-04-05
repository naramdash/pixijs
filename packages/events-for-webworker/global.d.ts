declare namespace GlobalMixins
{
    type FederatedEventEmitterTypes = import('@pixi/events-for-webworker').FederatedEventEmitterTypes;
    type FederatedEventTarget = import('@pixi/events-for-webworker').FederatedEventTarget;
    type IFederatedDisplayObject = import('@pixi/events-for-webworker').IFederatedDisplayObject;

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DisplayObject extends Omit<FederatedEventTarget, keyof IFederatedDisplayObject>, IFederatedDisplayObject
    {

    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DisplayObjectEvents extends FederatedEventEmitterTypes
    {

    }

    interface IRenderer
    {
        readonly events: import('@pixi/events-for-webworker').EventSystem;
    }

    interface Renderer
    {
        readonly events: import('@pixi/events-for-webworker').EventSystem;
    }

    interface IRendererOptions
    {
        /**
         * The default event mode for all display objects.
         * @since 7.2.0
         */
        eventMode?: import('@pixi/events-for-webworker').EventMode;
        /**
         * The event features that are enabled by the EventSystem.
         * @since 7.2.0
         */
        eventFeatures?: import('@pixi/events-for-webworker').EventSystemOptions['eventFeatures']
    }

    interface CanvasRenderer
    {
        readonly events: import('@pixi/events-for-webworker').EventSystem;
    }
}
